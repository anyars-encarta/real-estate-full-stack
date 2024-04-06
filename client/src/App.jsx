import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
// import Navbar from './components/navbar/Navbar';
import Home from './pages/homePage/Home';
import List from './pages/listPage/List';
import { Layout, RequireAuth } from './pages/layout/Layout';
import SinglePage from './pages/singlePage/SinglePage';
import ProfilePage from './pages/profilePage/ProfilePage';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import ProfileUpdatePage from './pages/profileUpdatePage/ProfileUpdatePage';

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/list',
          element: <List />
        },
        {
          path: '/:id',
          element: <SinglePage />
        },
        
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/register',
          element: <Register />
        },
      ],
    },
    {
      path: '/',
      element: <RequireAuth />,
      children: [
        {
          path: '/profile',
          element: <ProfilePage />
        },
        {
          path: '/profile/update',
          element: <ProfileUpdatePage />
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
