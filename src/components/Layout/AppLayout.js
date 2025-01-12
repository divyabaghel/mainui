import { Outlet } from "react-router"
import Footer from "./Footer"
import Header from "./Header"

const AppLayout=()=>{

    return(
        <div>
           
            <Header/>
            App Layout
            <Outlet/>
            <Footer/>
        </div>
    )
}
export default AppLayout