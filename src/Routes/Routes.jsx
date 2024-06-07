import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Register from "../Pages/Register/Register";
import AllTrainers from "../Pages/AllTrainers/AllTrainers";
import AllClasses from "../Pages/AllClasses/AllClasses";
import Forum from "../Pages/Forum/Forum";
import TrainerDetails from "../Pages/TrainerDetails/TrainerDetails";
import TrainerBooking from "../Pages/TrainerBooking/TrainerBooking";
import DashboardLayout from "../Layout/DashboardLayout";
import ManageSlots from "../Pages/Dashboard/Trainer/ManageSlots";
import AddSlot from "../Pages/Dashboard/Trainer/AddSlot";
import BecomeATrainer from "../Pages/BecomeATrainer/BecomeATrainer";
import AddForum from "../Pages/Dashboard/Trainer/AddForum";
import NewsletterSubscriber from "../Pages/Dashboard/Admin/NewsletterSubscriber";
import FrontPage from "../Pages/Dashboard/Common/FrontPage";
import AllTrainersDashboard from "../Pages/Dashboard/Admin/AllTrainersDashboard";
import AppliedTrainer from "../Pages/Dashboard/Admin/AppliedTrainer";
import AddClass from "../Pages/Dashboard/Admin/AddClass";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path : '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/allTrainers',
          element: <AllTrainers></AllTrainers>
        },
        {
         path: '/details/:id',
         element: <TrainerDetails></TrainerDetails>
        },
        {
        path : '/becomeTrainer',
        element: <BecomeATrainer></BecomeATrainer>
        },
        {
         path: '/booking',
         element: <TrainerBooking></TrainerBooking>
        },
        {
          path: '/allClasses',
          element: <AllClasses></AllClasses>
        },
        {
          path: '/forum',
          element: <Forum></Forum>
        }
      ]
    },
    {
      path: "/dashboard",
      element : <DashboardLayout></DashboardLayout>,
      children:[
        // trainer routes
        {
          index: true,
          element: <FrontPage></FrontPage>
        },
       {
        path: 'manage-slot',
        element: <ManageSlots></ManageSlots>
       },
       {
        path: 'add-slot',
        element: <AddSlot></AddSlot>
       },
       {
        path: 'add-forum',
        element: <AddForum></AddForum>
       },
      //  admin routes
      {
        path: 'subscribers',
        element: <NewsletterSubscriber></NewsletterSubscriber>
      },
      {
        path: 'all-trainers',
        element: <AllTrainersDashboard></AllTrainersDashboard>
      },
      {
        path: 'applied-trainer',
        element: <AppliedTrainer></AppliedTrainer>
      },
      {
        path: 'add-class',
        element: <AddClass></AddClass>
      }
      ],
    },
  ]);

  export default router;