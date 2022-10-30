import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import AuthScreen from '../screens/AuthScreen';

import Error from '../screens/Error/Error';
import Home from '../screens/Home/Home';
import Tasks from '../screens/Tasks/Tasks';
import Gardens from '../screens/Gardens/Gardens';
import Plants from '../screens/Plants/Plants';
import Recipes from '../screens/Recipes/Recipes';
import Settings from '../screens/Settings/Settings';
import Strains from '../screens/Strains/Strains';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthScreen />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'tasks',
        element: <Tasks />,
      },
      {
        path: 'gardens',
        element: <Gardens />,
      },
      {
        path: 'plants',
        element: <Plants />,
      },
      {
        path: 'recipes',
        element: <Recipes />,
      },
      {
        path: 'strains',
        element: <Strains />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
    ],
  },
]);

export default router;
