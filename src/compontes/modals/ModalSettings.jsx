import { CheckIcon } from '@heroicons/react/24/outline'
import { CheckCircleIcon, PencilIcon, CurrencyDollarIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/solid'

export const generalText = "This window will close automatically in seconds";



const handleOrderConfirm = () => {
    alert('Pedido confirmado');
};

const handleOrderCancel = () => {
    setOpenModalConfirm(false);
    console.log('Pedido cancelado 🥶');

};

const handleModifyYes = () => {
    alert('Pedido modificado');
};

const handleModifyNo = () => {
    alert('No se modificó el pedido');
};

const handleCheckoutPay = () => {
    alert('Pedido cobrado');
};

const handleCheckoutCancel = () => {
    alert('Cobro cancelado');
};




export const values = {
    'orderInProgress': {
        bgColor: 'bg-green-600',
        color: 'text-green-500',
        hoverColor: 'ext-green-400',
        bgColor2: 'bg-green-600',
        color2: 'text-green-500',
        hoverColor2: 'ext-green-400',
        Icon: CheckCircleIcon,
        title: 'Order Confirmation',
        text: 'The order has been notified to the kitchen',
        button1Text: 'Okay',
        button2Text: '',
        button1Action: handleOrderCancel,
        button2Action: handleOrderConfirm,
    },
    'updateOrder': {
        bgColor: 'bg-blue-600',
        color: 'text-blue-500',
        hoverColor: 'hover:text-blue-200',
        bgColor2: 'bg-blue-700',
        color2: 'text-blue-500',
        hoverColor2: 'hover:text-blue-200',
        Icon: PencilIcon,
        title: 'Modify Order',
        text: 'Do you want to modify the order?',
        button1Text: 'No',
        button2Text: 'Yes',
        button1Action: handleModifyNo,
        button2Action: handleModifyYes,
    },
    'checkoutOrder':
    {
        bgColor: 'bg-indigo-600',
        color: 'text-indigo-500',
        hoverColor: 'text-indigo-400',
        Icon: CurrencyDollarIcon,
        title: 'Checkout Order',
        text: 'Do you want to checkout the order?',
        button1Text: 'Cancel',
        button2Text: 'Checkout',
        button1Action: handleCheckoutCancel,
        button2Action: handleCheckoutPay,
    }

}
