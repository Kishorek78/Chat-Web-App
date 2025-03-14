import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import RegisterPage from "../pages/RegisterPage";
import CheckEmailPage from "../pages/CheckEmailPage";
import CheckPasswordPage from "../pages/CheckPasswordPage";
import StartingPage from "../pages/StartingPage";
import MessagePage from "../component/MessagePage";
import AuthLayouts from "../layout";


const router  = createBrowserRouter([
{


    path: "/",
    element:<App/>,
    children: [
        {
            
            path:"register",
            element: <AuthLayouts >  <RegisterPage/> </AuthLayouts>
        
        
        
        },
        {
            path:"email",
            element:  <AuthLayouts >  <CheckEmailPage/> </AuthLayouts> 
        },
        {
            path:"password",
            element:  <AuthLayouts >  <CheckPasswordPage/> </AuthLayouts>
        },
        {
            path:"",
            element:<StartingPage />,
            children:[
                {
                    path: ':userId',
                    element: <MessagePage />
                }
            ]
        }
    ]

}



])
export default router