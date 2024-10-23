import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import Body from './components/Body';
import Error from './components/Error';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMeun';
import Cart from './components/Cart';
import Footer from './components/Footer';
import About from './components/About';
// import Contact from './components/Contact';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

const AppLayout = () => {
  return ( 
    <Provider store={appStore}>
       <div className="app">
        <Header />
      
        <Outlet/>
      
        <Footer />
     
    </div>
    </Provider>
  );
};
const Contact = lazy(() => import('./components/Contact'))
const appRouter = createBrowserRouter([
  { 
      path:"/",
      element:<AppLayout/>,
      children :[
          {
              path: "/",
              element:<Body/>,
          },

          {
              path:"/restaurants/:resId",
              element: <RestaurantMenu/>
          },

          {
              path: "/cart",
              element: <Cart/>
          },
          {
            path:"/contact",
            element:<Suspense fallback= {<h1>Loading.....</h1>}> <Contact/></Suspense> 
          },
          {
            path:"/about",
            element: <About/>
          }

      ],
      errorElement: <Error/>
      
  },
  
  
])
export default appRouter

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>)

