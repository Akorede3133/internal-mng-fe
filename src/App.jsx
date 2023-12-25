import AppLayout from "./components/AppLayout";
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Booking from "./pages/Booking";
import Cabin from "./pages/Cabin";
import User from "./pages/User";
import Settings from "./pages/Settings";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<AppLayout />}>
    <Route path="/" element={<Navigate to="dashboard" replace />}  />
    <Route path="dashboard" element={<Dashboard />}/>

    <Route path="bookings" element={<Booking />}/>
    <Route path="cabins" element={<Cabin />}/>
    <Route path="users" element={<User />}/>
    <Route path="settings" element={<Settings />}/>

  </Route>
))

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    }
  }
})
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}
