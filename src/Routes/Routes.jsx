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
import ActivityLog from "../Pages/Dashboard/Member/ActivityLog";
import Profile from "../Pages/Dashboard/Member/Profile";
import BookedTrainer from "../Pages/Dashboard/Member/BookedTrainer";
import AppliedTrainerDetails from "../Pages/Dashboard/Admin/AppliedTrainerDetails";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import TrainerRoute from "./TrainerRoute";

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
         element: <PrivateRoute>
          <TrainerDetails></TrainerDetails>
         </PrivateRoute>
        },
        {
        path : '/becomeTrainer',
        element: <PrivateRoute>
          <BecomeATrainer></BecomeATrainer>
        </PrivateRoute>
        },
        {
         path: '/details/:id/slot/:id',
         element: <PrivateRoute>
          <TrainerBooking></TrainerBooking>
         </PrivateRoute>
        },
        {
          path: '/allClasses',
          element: <AllClasses></AllClasses>
        },
        {
          path: '/forum',
          element: <PrivateRoute>
            <Forum></Forum>
          </PrivateRoute>
        }
      ]
    },
    {
      path: "/dashboard",
      element : <PrivateRoute>
        <DashboardLayout></DashboardLayout>
        </PrivateRoute>,
      children:[
        {
          index: true,
          element: <PrivateRoute>
            <FrontPage></FrontPage>
          </PrivateRoute>
        },
        // member routes
         {
          path: 'activity-log',
          element: <PrivateRoute>
             <ActivityLog></ActivityLog>
          </PrivateRoute> 
         },
         {
          path: 'profile',
          element: <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
         },
         {
          path: 'booked-trainer',
          element: <PrivateRoute>
            <BookedTrainer></BookedTrainer>
          </PrivateRoute>
         },

        // trainer routes
       {
        path: 'manage-slot',
        element: <PrivateRoute>
          <TrainerRoute>
          <ManageSlots></ManageSlots>
          </TrainerRoute>
        </PrivateRoute>
       },
       {
        path: 'add-slot',
        element: <PrivateRoute>
          <TrainerRoute>
          <AddSlot></AddSlot>
          </TrainerRoute>
        </PrivateRoute>
       },
      //  both admin and trainer routes
       {
        path: 'add-forum',
        element: <PrivateRoute>
          <AddForum></AddForum>
        </PrivateRoute>
       },
      //  admin routes
      {
        path: 'subscribers',
        element: <PrivateRoute>
          <AdminRoute>
          <NewsletterSubscriber></NewsletterSubscriber>
          </AdminRoute>
        </PrivateRoute>
      },
      {
        path: 'all-trainers',
        element: <PrivateRoute>
          <AdminRoute>
          <AllTrainersDashboard></AllTrainersDashboard>
          </AdminRoute>
        </PrivateRoute>
      },
      {
        path: 'applied-trainer',
        element: <PrivateRoute>
          <AdminRoute>
          <AppliedTrainer></AppliedTrainer>
          </AdminRoute>
        </PrivateRoute>
      },
      {
          path: 'applied-trainer/details/:id',
          element: <PrivateRoute>
            <AdminRoute>
            <AppliedTrainerDetails></AppliedTrainerDetails>
            </AdminRoute>
          </PrivateRoute>
      },
      {
        path: 'add-class',
        element: <PrivateRoute>
          <AdminRoute>
          <AddClass></AddClass>
          </AdminRoute>
        </PrivateRoute>
      }
      ],
    },
  ]);

  export default router;