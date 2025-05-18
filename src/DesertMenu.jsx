import CardsContainer from "./CardsContainer"
import { OrderProvider } from "./context/OrderContext"
import { ProductProvider } from "./context/ProductoContext"
import { TablesProvider } from "./context/TablesContext"

function DesertMenu() {
  return (
    <>
      <TablesProvider>
        <OrderProvider>
          <ProductProvider>
              <CardsContainer />
          </ProductProvider>
        </OrderProvider>
      </TablesProvider>
    </>
  )
}

export default DesertMenu