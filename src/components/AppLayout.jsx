import { Outlet } from "react-router-dom"
import Header from "./Header"
import SideBar from "./SideBar"

const AppLayout = () => {
  return (
    <div className="md:grid h-screen grid-cols-[20rem,1fr] grid-rows-[auto,1fr] overflow-hidden">
      <Header />
      <SideBar />
      <main className="bg-[#F9FAFB] min-h-screen overflow-y-auto">
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout