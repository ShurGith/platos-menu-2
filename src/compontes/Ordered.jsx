import isEqual from "lodash/isEqual";
import { useOrderContext } from "../context/OrderContext";
import { useTablesContext } from "../context/TablesContext";
import { DateTimeText } from "./DataComponent";
import { useEffect, useState } from "react";
import ComunModal from "./modals/ComunModal";

function Ordered() {
  const { actualOrder, hayData, totalPay, removeThisItem,
    counter, setActualOrder, addOrUpdateOrder, orderCart, } = useOrderContext();

  const { setTableActual, tableActual, clasesRemoveButtonsTable } = useTablesContext();
  const [isOpen, setIsOpen] = useState(false);
  const [isOrder, setIsOrder] = useState(false);
  const [isNewOrder, setIsNewOrder] = useState(false);
  const [modalCondition, setModalCondition] = useState('Pedido');
  //Ordenar los items pedidos por nombre
  const data = actualOrder.sort((a, b) => a.name.localeCompare(b.name, "es", { sensitivity: "base" }));

  const checkIsNewOrder = () => {
    return orderCart.find((order) => order.table === tableActual) ? false : true;
  };
  const checkIsOrder = () => {
    const findTable = orderCart.find(
      (order) => order.table === tableActual)?.item;
    return isEqual(findTable, actualOrder);
  };



  useEffect(() => {
    setIsNewOrder(checkIsNewOrder());
    setIsOrder(checkIsOrder());
    setIsNewOrder(checkIsNewOrder())
  }, [actualOrder, orderCart, tableActual]);


  function makeOrder() {
    addOrUpdateOrder(tableActual, actualOrder);
    setActualOrder([]);
    setIsOpen(true)
    setModalCondition('neworder');
    setTableActual(null);
    clasesRemoveButtonsTable();
  }
  function updateOrder() {
    setIsOpen(true)
    setModalCondition("updateorder")
    addOrUpdateOrder(tableActual, actualOrder);
  }
  function goBack() {
    clasesRemoveButtonsTable();
    setTableActual(null);
  }
  function removeOrder() {
    setIsOpen(true)
    setModalCondition("removeorder")
    clasesRemoveButtonsTable();
  }
  function checkOutorder() {
    setIsOpen(true)
    setModalCondition("checkoutorder")
  }
  const consolear = () => {
    console.clear();
    console.log("actualOrder", actualOrder);
    console.log("orderCart", orderCart);
    console.log("isNewOrder", isNewOrder);
    console.log("isOrder", isOrder);
    console.log("isCheckOut", isCheckOut);
    console.log("checkIfCheckOut", checkIfCheckOut());
  }
  return (
    <>
      {isOpen && <ComunModal condition={modalCondition} setIsOpen={setIsOpen} />}
      <div
        className={`${hayData ? "lg:absolute lg:top-2 lg:right-0" : ""} w-full bg-white h-fit rounded-xl py-4 relative`}>
        {tableActual && counter > 0 && (
          <>
            <div className="flex items-center justify-between gap-12 px-10">
              <div className="flex items-center gap-2">
                <img src="assets/images/dining-table.png" alt="table" className="w-8 h-8" />
                <h2 className="text-xl border-b border-rosado-10 text-rojo font-siete mb14"
                  onClick={() => consolear()}>
                  {tableActual} -Invoice
                </h2>
              </div>
              <span className="text-xs text-black/50"> {DateTimeText()}</span>
            </div>
            <h3 className="text-center mt-2 mb-2 text-rojo text-cinco">
              Total desserts <span className="font-siete"> ( {counter} )</span>
            </h3>
          </>
        )}
        {hayData && (
          <div className="flex flex-col gap-4 w-full px-6 lg:p-2">
            <div id="order-action"
              className=" flex-col items-center gap-2 mt-2" >
              <>
                {/*****  //*##### Manoubrer Orders Buttons #### *******/}
                <div className="grid grid-cols-3 justify-center gap-2 w-full">
                  <button
                    onClick={isNewOrder ? makeOrder : updateOrder}
                    className={`${isOrder ? "opacity-20 cursor-not-allowed" : "cursor-pointer"} bg-verde px-4 py-2 rounded-md text-rosado-10`}>
                    {isNewOrder ? "Make Order" : "Update Order"}
                  </button>

                  {/*** //*** GoBack orden Button */}
                  <button
                    onClick={() => goBack()}
                    className="bg-blue-400 cursor-pointer px-4 py-2 rounded-md text-rosado-10" >
                    Go Back </button>

                  {/* //*** Cancel orden Button */}
                  <button
                    onClick={() => removeOrder()}
                    className={`${actualOrder.length <= 0 ? "opacity-20 cursor-not-allowed" : "cursor-pointer"} bg-rojo px-4 py-2 rounded-md text-rosado-10`} >
                    Remove Order
                  </button>
                </div>
              </>
            </div>
            {data.map((item) => (
              <div
                key={item.name}
                className="flex w-full flex-col font-cuatro border-b text-sm border-rosado-10 py-2">
                <p className="font-siete px-2">{item.name}</p>
                <div className="flex items-center justify-between text-rosado-40 px-4 ">
                  <div className="flex items-center gap-6">
                    <p className="text-rojo font-cinco">{item.cantidad}x</p>
                    <p>@${item.price}</p>
                    <p className="font-cinco">${item.total}</p>
                  </div>
                  <button
                    className="size-4 rounded-full border flex items-center justify-center cursor-pointer"
                    onClick={() => removeThisItem(item.id)}
                  >
                    <img src="/assets/images/icon-remove-item.svg" alt="" />
                  </button>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-between  mt-10 text-rosado-90">
              <h4 className="font-cuatro text-sm">Order total</h4>
              <h4 className="font-siete text-2xl text-center"> ${totalPay}</h4>
            </div>
            <div className="flex items-center justify-center gap-2 mt-10 text-rosado-50 bg-rosado-10 p-2 rounded">
              <img src="/assets/images/icon-carbon-neutral.svg" alt="" />
              <h6 className="font-cuatro text-sm text-center">
                This is a <span className="font-siete text-xs">carbon-neutral</span> delivery
              </h6>
            </div>

            {/* //*** CheckOut orden Button */}
            <button
              className={`${(!isNewOrder && isOrder) ? "cursor-pointer" : "opacity-20 cursor-not-allowe"} bg-rojo text-rosado-10 py-2 rounded-full`}
              onClick={() => { checkOutorder() }}>
              CheckOut Order
            </button>
          </div>
        )}
        {!hayData && (
          <div className="flex flex-col items-center gap-4">
            <h6>Add some item to your order</h6>
            <img src="/assets/images/illustration-empty-cart.svg" alt="" />
            <h6>Your added items will appear here</h6>
          </div>
        )}
      </div>
    </>
  );
}

export default Ordered;
