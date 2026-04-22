import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout=()=>{
  return(
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <main className="flex-1 container mx-auto px-4 py-6">
        <Outlet/>
      </main>
      <footer className="text-center py-4 text-gray-500">
        @ {new Date().getFullYear()} Ecommerce3
      </footer>
    </div>  )
}

export default MainLayout;