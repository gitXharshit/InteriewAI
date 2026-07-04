import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import {Provider} from 'react-redux'
import store from './redux/store'

const savedTheme = localStorage.getItem("theme")
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
document.documentElement.classList.toggle(
  "dark",
  savedTheme ? savedTheme === "dark" : prefersDark
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </StrictMode>
)
