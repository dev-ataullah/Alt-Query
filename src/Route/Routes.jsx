import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Root from '../root/Root';
import Error from '../pages/Error/Error';
import Blog from '../pages/Blog/Blog';
import PrivetRoutes from './PrivetRoutes';
import MyQueries from '../pages/MyQueries/MyQueries';
import AddQueries from '../pages/AddQueries/AddQueries';
import QueryDetails from '../pages/QueryDetails/QueryDetails';
import AllQuerys from '../components/Querys/AllQuerys';
import MyRecommendations from '../pages/MyRecommendations/MyRecommendations';
import RecommendationsForMe from '../pages/RecommendationsForMe/RecommendationsForMe';
import ServicePage from '../pages/ServicePage/ServicePage';
import MyProfile from '../pages/Profile/MyProfile';
import HelpCenter from '../pages/HelpCenter/HelpCenter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/queries',
        element: <AllQuerys />,
      },
      {
        path: '/recommendations-for-me',
        element: (
          <PrivetRoutes>
            <RecommendationsForMe />
          </PrivetRoutes>
        ),
      },
      {
        path: '/my-queries',
        element: (
          <PrivetRoutes>
            <MyQueries />
          </PrivetRoutes>
        ),
      },
      {
        path: '/query-details/:id',
        element: (
          <PrivetRoutes>
            <QueryDetails />
          </PrivetRoutes>
        ),
      },
      {
        path: '/add-queries',
        element: (
          <PrivetRoutes>
            <AddQueries />
          </PrivetRoutes>
        ),
      },
      {
        path: '/my-recommendations',
        element: (
          <PrivetRoutes>
            <MyRecommendations />
          </PrivetRoutes>
        ),
      },
      {
        path: '/blog',
        element: (
          <PrivetRoutes>
            <Blog />
          </PrivetRoutes>
        ),
      },
      {
        path: '/help',
        element: <HelpCenter />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/services',
        element: <ServicePage />,
      },
      {
        path: '/profile',
        element: <MyProfile />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
]);
export default router;
