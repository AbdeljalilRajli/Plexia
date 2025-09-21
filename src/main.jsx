import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Remove anti-FOUC cloak and reveal body once React is mounted
const reveal = () => {
  const anti = document.getElementById('anti-fouc')
  if (anti) anti.remove()
  if (document && document.body) {
    document.body.style.visibility = 'visible'
  }
  const loader = document.getElementById('app-loader')
  if (loader && loader.parentNode) loader.parentNode.removeChild(loader)
}

// Reveal only after full window load to ensure styles are applied
window.addEventListener('load', () => {
  // Give the browser one frame to apply CSS before showing
  requestAnimationFrame(reveal)
})
