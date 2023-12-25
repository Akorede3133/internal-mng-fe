import { Outlet } from "react-router-dom"
import Header from "./Header"
import SideBar from "./SideBar"

const AppLayout = () => {
  return (
    <div className="md:grid h-screen grid-cols-[20rem,1fr] grid-rows-[auto,1fr]">
      <Header />
      <SideBar />
      <main className=" bg-[#F9FAFB]">
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout