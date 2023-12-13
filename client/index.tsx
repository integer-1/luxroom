import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { routes } from './routes.tsx'
import { Auth0Provider } from '@auth0/auth0-react'

const queryClient = new QueryClient()
const router = createBrowserRouter(routes)

const root = createRoot(document.getElementById('app') as HTMLElement)
root.render(
  <Auth0Provider
    domain="luxloom.au.auth0.com"
    clientId="tLQ4jzWrRDwbz1lfiYb4A5U1kER3J1R1"
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: 'http://localhost:5173/',
    }}
  >
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </Auth0Provider>
)
