import Cards from "./compontes/Cards";
import Ordered from "./compontes/Ordered";
import ModalOrder from "./compontes/modals/ModalOrder";
import TablesSelect from "./compontes/TablesSelect";
import { useOrderContext } from "./context/OrderContext";
import ModalOrderConfirm from "./compontes/modals/ModalOrderConfirm";
import NewModal from "./compontes/modals/newModal";
import  { useState } from "react";

function CardsContainer() {
  const {orderCart, modalOption } = useOrderContext();
  const [isOpen, setIsOpen] = useState(false);
  const [modalCondition, setModalCondition] = useState('Pedido');
  const pendingOrders = orderCart.length;

  const [isOpenNewModal, setIsOpenNewModal] = useState(false);

  const mesas = [...new Set(orderCart.map(order => order.table))].sort();

  const handleMesaClick = (mesa) => {
    document.getElementById('table' + mesa).click()
  };
function nuevoModal() {

  const toggleModal = () => {
    setIsOpenNewModal(!isOpenNewModal);
  };

  return (
    <div>
      <button onClick={toggleModal}>Open Modal</button>
      {isOpenNewModal && <NewModal />}
    </div>
  );
}

  return (
    <div className="w-full flex flex-col-reverse lg:grid lg:grid-cols-6 gap-2 px-2 lg:px-18 py-6 overflow-hidden relative">
    
      <div style={{ position: 'absolute', top: '20px', left: '20px' }}>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Open Modal
        </button>
        <select
          value={modalCondition}
          onChange={(e) => setModalCondition(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="Pedido">Pedido</option>
          <option value="Modificar">Modificar</option>
          <option value="Cobrar">Cobrar</option>
        </select>
        {isOpen && <NewModal condition={modalCondition} setIsOpen={setIsOpen} />}
      </div>
      <ModalOrder />
      {/*   <ModalDeleteConfirm /> */}
      <ModalOrderConfirm option={modalOption} />
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
        <TablesSelect />
        <Ordered />
      </div>
    </div>
  );
}

export default CardsContainer
