import { StrictMode } from 'react' //import strictmode
import { createRoot } from 'react-dom/client' //import createRoot
import './index.css' //import global css
import App from './App.jsx' //main app content
import './theme.scss'; //scss styling file



//render app in root
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
