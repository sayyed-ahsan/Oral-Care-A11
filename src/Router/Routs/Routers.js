import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Blog/Blog";
import EditRevies from "../../Pages/EditReview/EditRevies";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Rejister from "../../Pages/Login/Rejister";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import ServiceDetail from "../../Pages/ServiceDetail/ServiceDetail";
import Services from "../../Pages/Services/Services";
import PrivetRout from "../PrivetRout/PrivetRout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://assignment-ii-sayyed-ahsan.vercel.app/serviceshome')
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('https://assignment-ii-sayyed-ahsan.vercel.app/services')
            },
            {
                path: '/details/:id',
                element: <ServiceDetail></ServiceDetail>,
                loader: ({ params }) => fetch(`https://assignment-ii-sayyed-ahsan.vercel.app/details/${params.id}`),
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
                loader: () => fetch('https://assignment-ii-sayyed-ahsan.vercel.app/blogs')
            },
            {
                path: '/myreviews',
                element: <PrivetRout><MyReviews></MyReviews></PrivetRout>
            },
            {
                path: '/addsevice',
                element: <PrivetRout><AddService></AddService></PrivetRout>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Rejister></Rejister>
            },
            {
                path: '/edit/:id',
                element: <EditRevies></EditRevies>,
                loader: ({ params }) => fetch(`https://assignment-ii-sayyed-ahsan.vercel.app/edit/${params.id}`),

            }
        ]
    }
]);

export default router;