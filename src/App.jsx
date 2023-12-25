import Header from "./components/Header";
import Main from "./components/Main";
import SideBar from "./components/SideBar";

export default function App() {
  return (
    <div className="md:grid h-screen grid-cols-[15rem,1fr] grid-rows-[auto,1fr]">
      <Header />
      <SideBar />
      <Main />
    </div>
  )
}
