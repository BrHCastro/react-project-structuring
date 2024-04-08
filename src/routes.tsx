import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { Cart } from './pages/cart'
import { Home } from './pages/home'
import { SuccessPage } from './pages/success'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/cart', element: <Cart /> },
      { path: '/success', element: <SuccessPage /> },
    ],
  },
])
