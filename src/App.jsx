import AppLayout from "./components/AppLayout";
import Header from "./components/Header";
import Main from "./components/Main";
import SideBar from "./components/SideBar";
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Booking from "./pages/Booking";
import Cabin from "./pages/Cabin";
import User from "./pages/User";
import Settings from "./pages/Settings";

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
export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
