import React from 'react';
import { CheckCircleIcon, PencilIcon, CurrencyDollarIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/solid'
import { useTablesContext } from '../../context/TablesContext';


const NewModal = ({ condition, setIsOpen }) => {
  const { tableActual } = useTablesContext();
  let Icon, title, text, button1Text, button2Text, bgColor, color, hoverColor, bgColor2, color2, hoverColor2;

  const handlePedidoConfirm = () => {
    alert('Pedido confirmado');
  };

  const handlePedidoCancel = () => {
    setIsOpen(false);
    console.log('Pedido cancelado 🥶');

  };

  const handleModificarSi = () => {
    alert('Pedido modificado');
  };

  const handleModificarNo = () => {
    alert('No se modificó el pedido');
  };

  const handleCobrarCobrar = () => {
    setIsOpen(false);
  };

  const handleCobrarCancelar = () => {
    console.log('Cobro cancelado');
    setIsOpen(false);
  };

  let button1Action, button2Action;

  switch (condition) {
    case 'Pedido':
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
    case 'Modificar':
      bgColor = 'bg-blue-600';
      color = 'text-blue-500';
      hoverColor = 'hover:text-blue-200';
      color2 = 'text-blue-500';
      bgColor2 = 'bg-blue-700';
      hoverColor2 = 'hover:text-blue-200';
      Icon = PencilIcon;
      title = 'Modificar Pedido';
      text = '¿Desea modificar el pedido?';
      button1Text = 'No';
      button2Text = 'Si';
      button1Action = handleModificarNo;
      button2Action = handleModificarSi;
      break;
    case 'Cobrar':
      bgColor = 'bg-indigo-600';
      color = 'text-indigo-500';
      hoverColor = 'text-indigo-400';
      color2 = 'text-indigo-500';
      bgColor2 = 'bg-indigo-700';
      hoverColor2 = 'hover:text-indigo-200';
      Icon = QuestionMarkCircleIcon;
      title = 'CheckOut Order Confirmation for Table #' + tableActual;
      text = '¿Desea cobrar el pedido?';
      button1Text = 'CheckOut';
      button2Text = 'Cancel';
      button1Action = handleCobrarCobrar;
      button2Action = handleCobrarCancelar;
      break;
    default:
      Icon = QuestionMarkCircleIcon;
      title = 'Título por defecto';
      text = 'Texto por defecto';
      button1Text = 'Botón 1';
      button2Text = 'Botón 2';
      break;
  }

  return (
    <div className="z-50 fixed top-0 left-0 w-full h-full bg-black/50 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-md w-3/4 lg:w-1/2 flex-col justify-center items-center">
        <div className="flex justify-center items-center mb-2">
          <Icon className={`size-12 mr-2 ${color}`} />
          <h2 className={`text-xl font-bold ${color}`}>{title}</h2>
        </div>
        <div className="mb-4t text-center">
          <p>{text}</p>
        </div>
        <div className="flex justify-center gap-6">
          <button onClick={button1Action} className={`${bgColor} ${hoverColor} text-white font-bold py-2 px-4 rounded cursor-pointer`}>{button1Text}</button>
          {button2Text && <button onClick={button2Action} className={`${bgColor2} ${hoverColor2}  text-white font-bold py-2 px-4 rounded cursor-pointer`}>{button2Text}</button>}
        </div>
      </div>
    </div>

  );
};

export default NewModal;
