import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './routes/router.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Providers/AuthProvider.jsx'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
        <DndProvider backend={HTML5Backend}>
        <RouterProvider router={router} />
        </DndProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
