import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./Components/Home";
import Countrydetais from "./Components/Countrydetais";

 const router=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/',
                element:<Home/>,
            } ,
            {
                path:'/:country',
                element:<Countrydetais />
            }
        ]
    }
 ])
const root = createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={router}/>);
