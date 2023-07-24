import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Colleges from "../Colleges/Colleges";
import CardDetails from "../cardDetails/CardDetails";
import Login from "../Login/Login";
import Signup from "../Signup/signup";
import Admission from "../Admission/Admission";
import MyCollege from "../MyCollege/MyCollege";
import AdmissionForm from "../AdmissionForm/AdmissionForm";
import SearchCollege from "../SearchCollege/SearchCollege";
import AddReview from "../AddReview/AddReview";
import ReviewPage from "../ReviewPage/ReviewPage";

  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path: "/",
            element: <Home></Home>,
          },
          {
            path:"/colleges",
            element:<Colleges></Colleges>
            
          },
          {
            path:"/carddetails/:id",
            element:<CardDetails></CardDetails>,
            loader:({params})=>fetch(`https://college-booking-facilities-server-mahejabinmou.vercel.app/classes/${params.id}`)

          },
          {
            
              path:"/admissionform/:id",
              element:<AdmissionForm></AdmissionForm>,
              loader:({params})=>fetch(`https://college-booking-facilities-server-mahejabinmou.vercel.app/classes/${params.id}`)
  
            
          },
          {
            path:"/searchcollege",
            element:<SearchCollege></SearchCollege>
          },
          
          {
            path: "/login",
            element: <Login></Login>,
          },
          {
            path: "/signup",
            element: <Signup></Signup>,
          },
          {
            path:"/admission",
            element:<Admission></Admission>
          },
          {
            path:"/mycollege",
            element:<MyCollege></MyCollege>
          },
          {
            path:"/addreview",
            element:<AddReview></AddReview>,
           
          },
          {
            path:"/reviewpage",
            element:<ReviewPage></ReviewPage>,
           
          },
      ]
    },
  ]);