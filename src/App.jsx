import AppLayout from "./components/AppLayout";
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Cabin from "./pages/Cabin";
import User from "./pages/User";
import Settings from "./pages/Settings";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import Bookings from "./pages/Bookings";
import Booking from "./pages/Booking";
import Checkin from "./pages/Checkin";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import { DarkModeProvider } from "./context/darkModeContext";

const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route element={
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
      }
    >
      <Route path="/" element={<Navigate to="dashboard" replace />}  />
      <Route path="dashboard" element={<Dashboard />}/>

      <Route path="bookings" element={<Bookings />}/>
      <Route path="booking/:id" element={<Booking />}/>
      <Route path="checkin/:id" element={<Checkin />}/>
      <Route path="users" element={<Signup />}/>
      <Route path="cabins" element={<Cabin />}/>
      <Route path="settings" element={<Settings />}/>
      <Route path="account" element={<Profile />}/>
    </Route>
    <Route path="login" element={<Login />}/>
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
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterProvider router={router} />
        <Toaster 
        position="top-center" 
        gutter={12}
        containerStyle={{margin: '10px'}}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 4000
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: '',
            color: 'gray'
          }
        }} 
        />
      </QueryClientProvider>
    </DarkModeProvider>
  )
}
