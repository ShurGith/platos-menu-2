import { useOrderContext } from "../context/OrderContext";
import { useTablesContext } from "../context/TablesContext";
import isEqual from 'lodash/isEqual';

function TablesSelect() {
  const { tables, setTableActual, tableActual } = useTablesContext();
  const { orderCart, actualOrder } = useOrderContext();

  function comumAction(table) {
    document.querySelectorAll('[data-type="table"]').forEach((elemento) => {
      elemento.classList.remove('border-2', 'bg-rosado-90', 'border-rosado-30', 'border-2')
    });
    document.getElementById('table' + table).classList.add('border-2', 'bg-rosado-90', 'border-rosado-30', 'border-2')
  }

  const clickfather = (mesa) => {
    document.getElementById('table' + mesa).click()
  }

  function handleTable(table) { //Activacion de la mesa
    comumAction(table);
    setTableActual(table);
  }

  function consolea() {
    console.clear()
    console.log("tableActual: ", tableActual)
    console.log("orderCart: ", orderCart)
    console.log("actualOrder: ", actualOrder)
    const mesaActual = orderCart.find(order => order.table === tableActual)?.item;
    console.log("Mesa actual: ", mesaActual);
    console.log("Mesa comparadas: ", isEqual(mesaActual, actualOrder));
  }

  return (
    <div className="lg:col-span-2  mt-8 h-fit gap-4 flex flex-col relative">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4"
          onClick={() => consolea()}>
          Select a Table</h2>
        <div className="grid grid-cols-3 gap-1 ">
          {tables.map((table) => (
            <button key={table.id}
              id={`table${table.id}`}
              data-type="table"
              className={`text-3xl font-cinco flex items-center justify-center gap-2 w-30 h-12 rounded-md cursor-pointer bg-rosado-50 text-rosado-10`}
              onClick={() => handleTable(table.id)}>
              <img src="assets/images/dining-table.png" alt="table" className="w-8 h-8"
                onClick={() => { clickfather(table.id) }} />
              {table.id}
            </button>
          ))}
        </div>
      </div>

    </div>
  )
}

export default TablesSelect