import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
// import Navbar from './components/navbar/Navbar';
import Home from './pages/homePage/Home';
import List from './pages/listPage/List';
import Layout from './pages/layout/Layout';
import SinglePage from './pages/singlePage/SinglePage';
import ProfilePage from './pages/profilePage/ProfilePage';
import Register from './pages/register/Register';
import Login from './pages/login/Login';

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
          path: '/profile',
          element: <ProfilePage />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/register',
          element: <Register />
        },
      ]
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App