import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { router } from './router/Router.jsx'
import "swiper/css";
import "swiper/css/navigation";
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='inter-font'>
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
