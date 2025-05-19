
import { Icon } from '@iconify-icon/react';
import { useTablesContext } from '../../context/TablesContext';
import { useOrderContext } from '../../context/OrderContext';
import CountdownTimer from "./CountdownTimer";

const ComunModal = ({ condition, setIsOpen }) => {
  const { tableActual, setTableActual, clasesRemoveButtonsTable, actualOrder } = useTablesContext();
  const { setActualOrder, deleteOrder, addOrUpdateOrder } = useOrderContext();
  let icon, title, text, button1Text, button2Text, bgColor, color, hoverColor, bgColor2, color2, hoverColor2;
  const COUNTDOWN_SECONDS = 10000;
  const generalText = "This window will close in ";
  const handlePedidoConfirm = () => {
    alert('Pedido confirmado');
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleUpdateOrder = () => {
    clasesRemoveButtonsTable();
    setIsOpen(false);
  };

  const handleCheckOut = () => {
    setIsOpen(false);
    clasesRemoveButtonsTable();
    setTableActual(null);
    setActualOrder([]);
    deleteOrder(tableActual);
  };

  const handleRemoveOrder = () => {
    setIsOpen(false);
    setTableActual(null);
    deleteOrder(tableActual);
    setActualOrder([]);
    clasesRemoveButtonsTable();
  }

  let button1Action, button2Action;

  switch (condition) {
    case 'neworder':
      bgColor = 'bg-green-600';
      color = 'text-green-500';
      hoverColor = 'ext-green-400';
      bgColor2 = 'bg-green-600';
      color2 = 'text-green-500';
      hoverColor2 = 'ext-green-400';
      icon = "material-symbols:order-approve";
      title = 'Confirmar Pedido';
      text = '¿Desea confirmar el pedido?';
      button1Text = 'Confirm';
      button2Text = 'Cancel';
      button1Action = handlePedidoConfirm;
      button2Action = handleCancel;
      break;
    case 'updateorder':
      bgColor = 'bg-green-600';
      color = 'text-green-600';
      hoverColor = 'hover:bg-green-700';
      color2 = 'text-green-500';
      bgColor2 = 'bg-green-700';
      hoverColor2 = 'hover:bg-green-200';
      icon = "material-symbols:order-approve";
      title = 'The order has been updated';
      text = 'Sit incididunt consequat consectetur duis cillum est nostrud commodo anim. Mollit cillum fugiat proident fugiat. Dolor.';
      button1Text = 'Okey';
      button2Text = '';
      button1Action = handleUpdateOrder;
      button2Action = handleCancel;
      break;
    case 'checkoutorder':
      bgColor = 'bg-indigo-600';
      color = 'text-indigo-500';
      hoverColor = 'text-indigo-400';
      color2 = 'text-indigo-500';
      bgColor2 = 'bg-indigo-700';
      hoverColor2 = 'hover:text-indigo-200';
      icon = "material-symbols:order-approve";
      title = 'CheckOut Order Confirmation for Table #' + tableActual;
      text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat';
      button1Text = 'CheckOut';
      button2Text = 'Cancel';
      button1Action = handleCheckOut;
      button2Action = handleCancel;
      break;
    case 'removeorder':
      bgColor = 'bg-red-600';
      color = 'text-red-500';
      hoverColor = 'hover:bg-red-400';
      color2 = 'text-red-500';
      bgColor2 = 'bg-green-700';
      hoverColor2 = 'hover:bg-green-600';
      icon = "bx:trash";
      title = 'Are you sure you want to remove the order for Table #' + tableActual + '?';
      text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat';
      button1Text = 'Yes, I\'m sure';
      button2Text = 'Cancel';
      button1Action = handleRemoveOrder;
      button2Action = handleCancel;
      break;
    default:
      icon = "material-symbols:order-approve";
      title = 'Título por defecto';
      text = 'Texto por defecto';
      button1Text = 'Botón 1';
      button2Text = 'Botón 2';
      break;
  }

  return (
    <div className="z-50 fixed top-0 left-0 w-full h-full bg-black/90 flex justify-center items-center">
      <div className="bg-white p-4 rounded-md w-3/4 lg:w-1/2 flex-col justify-center items-center max-w-2xl px-12">
        <div className="flex flex-col justify-center items-center mb-2">
          <Icon icon={icon} width="56" height="56" className={` ${color}`} />
          <h2 className={`text-xl font-bold ${color}`}>{title}</h2>
        </div>
        <div className="mb-4t text-center">
          <p>{text}</p>
          <p className="text-gray-300 text-xs mb-2 mt-6">
            {generalText}
            <CountdownTimer
              seconds={COUNTDOWN_SECONDS}
              onComplete={() => { setIsOpen(false) }}
              className="font-bold" /> &nbsp;seconds
          </p>
        </div>
        <div className="flex justify-center gap-36 mt-8">
          <button onClick={button1Action} className={`${bgColor} ${hoverColor} text-white font-bold py-2 px-4 rounded cursor-pointer`}>{button1Text}</button>
          {button2Text && <button onClick={button2Action} className={`${bgColor2} ${hoverColor2}  text-white font-bold py-2 px-4 rounded cursor-pointer`}>{button2Text}</button>}
        </div>
      </div>
    </div>

  );
};

export default ComunModal;
