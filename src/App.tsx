import React from 'react';
import {RouterProvider} from "react-router-dom";

import router from './routers';

interface AppProps {}

const App: React.FC<AppProps> = () => (
  <RouterProvider router={router}/>
);

export default App;
