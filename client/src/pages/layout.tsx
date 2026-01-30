import { QueryProvider } from "@/providers"
import { Outlet } from "react-router"

const Layout =()=>{
    return <div className="app">
        <QueryProvider>
        <p>ki obostha</p>
      <Outlet/>
      </QueryProvider>
    </div>
}
export default Layout