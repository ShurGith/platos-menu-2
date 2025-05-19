/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useState } from "react";
import { useTablesContext } from "./TablesContext";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
    const [counter, setCounter] = useState(0);
    const [openModalConfirm, setOpenModalConfirm] = useState(false)
    const [actualOrder, setActualOrder] = useState([]);

    const [orderCart, setOrderCart] = useState(() => {
        const datosGuardados = localStorage.getItem('cartOrdered');
        return datosGuardados ? JSON.parse(datosGuardados) : [];
    });
    const { tableActual } = useTablesContext();

    useEffect(() => {
        setCounter(
            actualOrder.reduce((acc, item) => item.cantidad ? acc + item.cantidad : acc, 0)
        );
    }, [actualOrder, tableActual]);
    const hayData = actualOrder && actualOrder.length > 0;
    const totalItems = 1
    const totalPay = hayData && actualOrder.reduce((acc, item) => acc + Number(item.total), 0).toFixed(2);

    // Guardar los pedidos actualizados en localStorage
    useEffect(() => {
        localStorage.setItem("cartOrdered", JSON.stringify(orderCart));
        setCounter(actualOrder.length);
    }, [orderCart]);

    // Obtener un pedido específico por mesa
    function getOrderByTable(tableNumber) {
        return orderCart.find(order => order.table === tableNumber) || [];
    }

    useEffect(() => {
        setActualOrder(getOrderByTable(tableActual).item || []);
    }, [tableActual]);

    // Agregar o actualizar un pedido por mesa
    const addOrUpdateOrder = (tableNumber, item) => {
        setOrderCart(prevOrders => {
            const existingIndex = prevOrders.findIndex(order => order.table === tableNumber);
            if (existingIndex !== -1) {
                const updated = [...prevOrders];
                updated[existingIndex].item = item;
                return updated;
            }
            return [...prevOrders, { table: tableNumber, item }];
        });
    };

    // Eliminar todo el pedido de una 
    function deleteOrder(tableNumber) {
        setOrderCart(prevOrders => prevOrders.filter(order => order.table !== tableNumber));
    }

    //Eliminar un item desde la carta
    const removeThisItem = (id) => {
        setActualOrder(prev => prev.filter(item => item.id !== id))
    }

    return (
        <OrderContext.Provider value={{
            orderCart, setOrderCart,
            counter, setCounter,
            actualOrder, setActualOrder,
            //  openModal, setOpenModal,
            openModalConfirm, setOpenModalConfirm,
            hayData, totalItems, totalPay,
            getOrderByTable, removeThisItem,
            addOrUpdateOrder, deleteOrder,
        }}>
            {children}
        </OrderContext.Provider>
    );
};

export const useOrderContext = () => {
    const context = useContext(OrderContext);
    if (!context) {
        throw new Error("useOrderContext debe usarse dentro de un OrderProvider");
    }
    return context;
};