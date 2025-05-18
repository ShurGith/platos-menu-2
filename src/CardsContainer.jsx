import Cards from "./compontes/Cards";
import Ordered from "./compontes/Ordered";
import ModalOrder from "./compontes/modals/ModalOrder";
import TablesBottons from "./compontes/TablesBottons";
import { useOrderContext } from "./context/OrderContext";

function CardsContainer() {
  const { orderCart } = useOrderContext();
  const pendingOrders = orderCart.length;


  const mesas = [...new Set(orderCart.map(order => order.table))].sort();
  const handleMesaClick = (mesa) => {
    document.getElementById('table' + mesa).click()
  };


  return (
    <div className="w-full flex flex-col-reverse lg:grid lg:grid-cols-6 gap-2 px-2 lg:px-18 py-6 overflow-hidden relative">


      <ModalOrder />
      {/*   <ModalDeleteConfirm />
      {openModalConfirm && <ModalOrderConfirm option={modalOption} setIsOpen={openModalConfirm} />} */}
      <div className="lg:col-span-4">
        <h1 className="text-4xl font-siete text-rosado-90 lg:pt-8 pb-4 ">Desserts</h1>
        <div className="flex flex-wrap items-center justify-center  py-2 gap-2 w-full ">
          <span className="font-siete underline">{pendingOrders}</span> table{pendingOrders === 1 ? '' : 's'} with pending orders:
          {mesas.map((mesa, index) => (
            <button
              key={index}
              id={`table-${mesa}`}
              data-table={mesa}
              className="cursor-pointer px-3 py-1 text-sm font-siete border rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => handleMesaClick(mesa)}>
              #{mesa}
            </button>
          ))}
        </div>
        <Cards />
      </div>
      <div className="lg:col-span-2 mt-8 h-fit gap-4 flex flex-col relative">
        <TablesBottons />
        <Ordered />
      </div>
    </div>
  );
}

export default CardsContainer
