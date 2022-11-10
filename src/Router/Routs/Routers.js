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
                loader: () => fetch('http://localhost:5000/serviceshome')
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: '/details/:id',
                element: <ServiceDetail></ServiceDetail>,
                loader: ({ params }) => fetch(`http://localhost:5000/details/${params.id}`),
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
                loader: () => fetch('http://localhost:5000/blogs')
            },
            {
                path: '/myreviews',
                element: <PrivetRout><MyReviews></MyReviews></PrivetRout>
            },
            {
                path: '/addsevice',
                element: <AddService></AddService>
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
                loader: ({ params }) => fetch(`http://localhost:5000/edit/${params.id}`),

            }
        ]
    }
]);

export default router;