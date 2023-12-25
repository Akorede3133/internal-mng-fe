import { Outlet } from "react-router-dom"
import Header from "./Header"
import SideBar from "./SideBar"

const AppLayout = () => {
  return (
    <div className="md:grid h-screen grid-cols-[15rem,1fr] grid-rows-[auto,1fr]">
      <Header />
      <SideBar />
      <Outlet />
    </div>
  )
}

export default AppLayout