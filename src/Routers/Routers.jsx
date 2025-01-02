import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import CollegeDetails from "../pages/Home/CollegeDetails/CollegeDetails";
import Colleges from "../pages/Colleges/Colleges";
import Admission from "../pages/Admission/Admission";
import SelectCollege from "../pages/SelectCollege/SelectCollege";
import LogIn from "../pages/LogIn/LogIn";
import Register from "../pages/Register/Register";
import NotFound from "../pages/NotFound/NotFound";
import MyCollege from "../pages/MyCollege/MyCollege";
import PrivateRoute from "./PrivateRoute";
import MyProfile from "../pages/MyProfile/MyProfile";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'college/:id',
                element:<PrivateRoute><CollegeDetails></CollegeDetails></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:7000/specificCollege/${params.id}`)
            },
            {
                path:'colleges',
                element:<Colleges></Colleges>
            },
            {
                path:'admission',
                element:<Admission></Admission>
            },
            {
                path:'selectedCollege/:names',
                element:<PrivateRoute><SelectCollege></SelectCollege></PrivateRoute>
            },
            {
                path:'myCollege/:email',
                element:<MyCollege></MyCollege>,
                loader:(({params})=>fetch(`http://localhost:7000/admissionOn/${params.email}`))
            },
            {
                path:'myProfile/:email',
                element:<PrivateRoute><MyProfile></MyProfile></PrivateRoute>,
                loader:(({params})=>fetch(`http://localhost:7000/admissionOn/${params.email}`))
            },
            {
                path:'logIn',
                element:<LogIn></LogIn>
            },
            {
                path:'register',
                element:<Register></Register>
            },
            {
                path:"*",
                element:<NotFound></NotFound>
            }

        ]
    }
])