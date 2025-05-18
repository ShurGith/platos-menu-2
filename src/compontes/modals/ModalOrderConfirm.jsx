import {
  CheckCircleIcon,
  PencilIcon,
  CurrencyDollarIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/solid";

import { useOrderContext } from "../../context/OrderContext";
import { values, generalText } from "./ModalSettings";
import CountdownTimer from "./CountdownTimer"; // Import the CountdownTimer component
function ModalOrderConfirm() {
  const { openModalConfirm, setOpenModalConfirm, modalCondition } =
    useOrderContext();
  //if (option === null) return;

  const COUNTDOWN_SECONDS = 10000;

  // Function to close the modal when the timer completes
  const handleTimerComplete = () => {
    setOpenModalConfirm(false);
    console.log("Modal closed automatically after countdown");
  };

  const {
    bgColor,
    color,
    hoverColor,
    bgColor2,
    color2,
    hoverColor2,
    Icon,
    title,
    text,
    button1Text,
    button2Text,
    button1Action,
    button2Action,
  } = values[modalCondition];

  const setClose = () => {
    //setOpenModalConfirm(null);
    //etOpenModalConfirm(false)
  };

  /*
  let Icon, title, text, button1Text, button2Text, bgColor, color, hoverColor, bgColor2, color2, hoverColor2;
  let button1Action, button2Action;

  const handlePedidoConfirm = () => {
    alert('Pedido confirmado');
  };

  const handlePedidoCancel = () => {
    setOpenModalConfirm(false);
    console.log('Pedido cancelado 🥶');

  };

  const handleModificarSi = () => {
    alert('Pedido modificado');
  };

  const handleModificarNo = () => {
    alert('No se modificó el pedido');
  };

  const handleCobrarCobrar = () => {
    alert('Pedido cobrado');
  };

  const handleCobrarCancelar = () => {
    alert('Cobro cancelado');
  };
  /*
    switch (modalCondition) {
      case 'orderInProgress':
        bgColor = 'bg-green-600';
        color = 'text-green-500';
        hoverColor = 'ext-green-400';
        bgColor2 = 'bg-green-600';
        color2 = 'text-green-500';
        hoverColor2 = 'ext-green-400';
        Icon = CheckCircleIcon;
        title = 'Confirmar Pedido';
        text = '¿Desea confirmar el pedido?';
        button1Text = 'Cancelar';
        button2Text = 'Confirmar';
        button1Action = handlePedidoCancel;
        button2Action = handlePedidoConfirm;
        break;
      case 'updateOrder':
        bgColor = 'bg-blue-600';
        color = 'text-blue-500';
        hoverColor = 'hover:text-blue-200';
        bgColor2 = 'bg-blue-700';
        color2 = 'text-blue-500';
        hoverColor2 = 'hover:text-blue-200';
        Icon = PencilIcon;
        title = 'Modificar Pedido';
        text = '¿Desea modificar el pedido?';
        button1Text = 'No';
        button2Text = 'Si';
        button1Action = handleModificarNo;
        button2Action = handleModificarSi;
        break;
      case 'checkoutOrder':
        bgColor = 'bg-indigo-600';
        color = 'text-indigo-500';
        hoverColor = 'text-indigo-400';
        Icon = CurrencyDollarIcon;
        title = 'Cobrar Pedido';
        text = '¿Desea cobrar el pedido?';
        button1Text = 'Cancelar';
        button2Text = 'Cobrar';
        button1Action = handleCobrarCancelar;
        button2Action = handleCobrarCobrar;
        break;
      default:
        Icon = QuestionMarkCircleIcon;
        title = 'Título por defecto';
        text = 'Texto por defecto';
        button1Text = 'Botón 1';
        button2Text = 'Botón 2';
        break;
    }
  */
  return (
    <div className="z-50 fixed top-0 left-0 w-full h-full bg-black/50 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-md w-3/4 lg:w-fit lg:min-w-150 flex flex-col justify-between items-center min-h-68 rounded-md">
        <div
          className={`w-full h-6 ${bgColor} flex justify-center items-center rounded-t-md`}
        ></div>
        <div className="flex justify-center items-center my-6">
          <Icon className={`size-12 mr-2 ${color}`} />
          <h2 className={`text-xl font-bold ${color}`}>{title}</h2>
        </div>
        <p className="text-xl font-cinco">{text}</p>
        <p className="text-gray-600/50 mt-6">
          {generalText.replace("seconds", "")}
          <CountdownTimer
            seconds={COUNTDOWN_SECONDS}
            onComplete={handleTimerComplete}
            className="font-bold"
          />{" "}
          &nbsp;seconds
        </p>
        {/*  BUTTONS    */}
        <div className="flex justify-center gap-6 my-4">
          <button
            onClick={button1Action}
            className={`${bgColor} ${hoverColor} text-white font-bold py-2 px-4 rounded cursor-pointer`}
          >
            {button1Text}
          </button>
          {button2Text && (
            <button
              onClick={button2Action}
              className={`${bgColor2} ${hoverColor2}  ${color2}  font-bold py-2 px-4 rounded cursor-pointer`}
            >
              {button2Text}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ModalOrderConfirm;
