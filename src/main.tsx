import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/devtools'
import App from './App'
import ErrorPage from './Components/ErrorPage/ErrorPage'
import './index.scss'
import { Provider } from 'react-redux'
import store from './App/store'


const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
  // </React.StrictMode>
)