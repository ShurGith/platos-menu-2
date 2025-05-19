import BottonsOrder from './BottonsOrder'
import { useProduct } from "../context/ProductoContext";

function Cards() {
  const { data } = useProduct();

  const salida = data.sort((a, b) => a.name.localeCompare(b.name, 'en', { sensitivity: 'base' }));
  return (
    <div className="lg:grid lg:grid-cols-3 w-full">
      {salida && salida.map((item, index) => (
        <div key={index} id={index} data-id={index} className='w-full gap-4 flex flex-col items-center px-4'>
          {/*** Image Here ***/}
          <div className='relative' data-clase='imagedata'>
            <img className='w-full rounded-2xl' src={item.image.desktop} alt={item.name} />
            <BottonsOrder name={item.name} price={item.price} image={item.image.thumbnail} id={index} />
          </div>
          <div className='flex flex-col items-start pb-4 pl-2 w-full'>
            <p>{item.category}</p>
            <h1 data-clase='namedata' className='font-cinco text-lg'>{item.name}</h1>
            <p data-clase='pricedata'>${item.price}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cards