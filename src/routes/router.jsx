import { createBrowserRouter } from "react-router";
import LoginPage from "../components/loginPage/LoginPage";
import Homepage from "../components/homepage/Homepage";
import DefaultLayout from "../components/defaultLayout/DefaultLayout";
import Webshop from "../components/webshop/Webshop";
import About from "../components/about/About";
import Cart from "../components/cart/Cart";


const router = createBrowserRouter([
    {
        path:'/',
        element: <DefaultLayout />,
        children:[
            {
                index: true,
                path:'/',
                element: <Homepage />
            },

            {
                path: '/bejelentkezes',
                element: <LoginPage />
            },
            {
                path:'/webshop?ferfi=true',
                element:<Webshop />

            },
            {
                path:'/webshop?noi=true' ,
                element: <Webshop />,
            },
            {
                path:'/webshop?unisex=true' ,
                element: <Webshop /> ,
            },
            {
                path: '/rolunk' ,
                element: <About /> ,
            },
            {
                path:'/kosar' ,
                element:<Cart /> ,
            },
            {
                path:'/webshop',
                element:<Webshop />
            }

        ]
    },

  
])

export default router;