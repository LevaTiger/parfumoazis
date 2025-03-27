import { createBrowserRouter } from "react-router";
import LoginPage from "../components/loginPage/LoginPage";
import Homepage from "../components/homepage/Homepage";
import DefaultLayout from "../components/defaultLayout/DefaultLayout";


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
                element:<h2>ferfi parfümök</h2>
            },
            {
                path:'/noi-parfumok' ,
                element: <h2>női parfümök</h2>,
            },
            {
                path:'/unisex-parfumok' ,
                element: <h2>unisex parfümök</h2> ,
            },
            {
                path: '/rolunk' ,
                element: <h2>rólunk</h2> ,
            },
            {
                path:'/kosar' ,
                element:<h2>kosár</h2> ,
            }

        ]
    },

  
])

export default router;