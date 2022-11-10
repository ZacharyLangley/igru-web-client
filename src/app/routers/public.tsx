import {createBrowserRouter} from 'react-router-dom';

import Error from '../screens/ErrorScreen/ErrorScreen';
import AuthScreen from '../screens/AuthScreen/AuthScreen';
import Login from '../screens/AuthScreen/Forms/Login/Login';
import Register from '../screens/AuthScreen/Forms/Register/Register';
import {RoutePath} from '../types/routes';

const PrivateRouter = createBrowserRouter([
  {
    path: RoutePath.HOME,
    element: <AuthScreen />,
    errorElement: <Error />,
    children: [
      {
        path: RoutePath.HOME,
        element: <Login />,
      },
      {
        path: RoutePath.REGISTER,
        element: <Register />,
      },
    ],
  },
]);

export default PrivateRouter;
