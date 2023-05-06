import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import WithSidebar from './components/WithSidebar.jsx';
import CustomerData from './pages/CustomerData.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import store from './store/store.js';
import { injectStore } from './utils/apiSetup.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <WithSidebar>
      <div >Hello world!</div>
    </WithSidebar> ,
  },
  {
    path: "/new",
    element: <div>Hello world!EEW</div>,
  },
  {
    path: "/customer",
    element: <CustomerData/>,
  },
]);

injectStore(store);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>

    <RouterProvider router={router}/>
    <ToastContainer
      hideProgressBar={true}
      theme='dark'
      position="bottom-center"
      autoClose={3000}
      closeOnClick
    />
    </Provider>
  </React.StrictMode>,
)
