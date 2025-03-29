import { createBrowserRouter } from "react-router";
import LoginPage from "../components/loginPage/LoginPage";
import Homepage from "../components/homepage/Homepage";
import DefaultLayout from "../components/defaultLayout/DefaultLayout";
import Webshop from "../components/webshop/Webshop";


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
                path:'/ferfi-parfumok',
                element:<h2>A Weboldal fejlesztés alatt áll!</h2>

            },
            {
                path:'/noi-parfumok' ,
                element: <h2>A Weboldal fejlesztés alatt áll!</h2>,
            },
            {
                path:'/unisex-parfumok' ,
                element: <h2>A Weboldal fejlesztés alatt áll!</h2> ,
            },
            {
                path: '/rolunk' ,
                element: <h2>A Weboldal fejlesztés alatt áll!</h2> ,
            },
            {
                path:'/kosar' ,
                element:<h2>A Weboldal fejlesztés alatt áll!</h2> ,
            },
            {
                path:'/webshop',
                element:<Webshop />
            }

        ]
    },

  
])

export default router;