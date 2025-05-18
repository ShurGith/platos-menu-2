import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DesertMenu from './DesertMenu.jsx'

createRoot(document.getElementById('root')).render(
  //<StrictMode>
  <>
    <DesertMenu />
  </>
 // </StrictMode>,
)


