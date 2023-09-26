import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import myCreatedRoute from './Router/Route';

export const GlobalContext = createContext(null);
export const GlobalContext2 = createContext(null);

const userId = '5067';
const userInfo = {
  name: 'nur',
  id: '5',
  age: 35,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalContext.Provider value={userInfo}>
      <GlobalContext2.Provider value={userInfo}>
        <RouterProvider router={myCreatedRoute}></RouterProvider>
      </GlobalContext2.Provider>
    </GlobalContext.Provider>
  </React.StrictMode>
);
