import { QueryProvider } from "@/providers"
import { Outlet, useNavigate } from "react-router"
import { useEffect} from "react"

const Layout =()=>{

    const navigate = useNavigate()
    // cjking auth here from the cookies

    useEffect(()=>{

        const checkAuthFromCookies =(): boolean =>{
            // reading the user info from the local storage
            const user = localStorage.getItem('ivm-user')
            return !!user;
        }
      
        

        const isAuthenticated = checkAuthFromCookies();
        if (!isAuthenticated)
        {
            navigate('/login')
        }
    },[])
    return <div className="app">
        <QueryProvider>
        <p>ki obostha</p>
      <Outlet/>
      </QueryProvider>
    </div>
}
export default Layout