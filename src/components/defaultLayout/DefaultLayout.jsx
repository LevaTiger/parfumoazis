import { Outlet } from "react-router"
import Header from "./header/Header"
import Footer from "./footer/Footer"
import { useContext } from "react"
import { LoginContext, LoginProvider } from "../../features/contexts/LoginContext"

const DefaultLayout=()=>{

    return(
        <>
                <LoginProvider >
                    <Header />
                    <Outlet />
                    <Footer />
                </LoginProvider>
        </>
    )
}

export default DefaultLayout;