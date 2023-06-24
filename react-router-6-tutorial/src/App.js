import { useState } from 'react';
// import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  Home,
  About,
  Products,
  Error,
  SingleProduct,
  Layout,
  Login,
  Dashboard,
  ProtectedRoute,
  ProductLayout,
} from './pages';

function App() {
  const [user, setUser] = useState(null);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <Error />,
      children: [
        { path: '', element: <Home /> },
        { path: 'about', element: <About /> },
        {
          path: 'products',
          element: <ProductLayout />,
          children: [
            { path: '', element: <Products /> },
            { path: ':productId', element: <SingleProduct /> },
          ],
        },
        { path: 'login', element: <Login setUser={setUser} /> },
        {
          path: 'dashboard',
          element: (
            <ProtectedRoute user={user}>
              <Dashboard user={user} />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);

  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path='/' element={<Layout />}>
  //         <Route index element={<Home />} />
  //         <Route path='about' element={<About />} />
  //         <Route path='products' element={<ProductLayout />}>
  //           <Route index element={<Products />} />
  //           <Route path=':productId' element={<SingleProduct />} />
  //         </Route>
  //         <Route path='login' element={<Login setUser={setUser} />} />
  //         <Route
  //           path='dashboard'
  //           element={
  //             <ProtectedRoute user={user}>
  //               <Dashboard user={user} />
  //             </ProtectedRoute>
  //           }
  //         />
  //         <Route path='*' element={<Error />} />
  //       </Route>
  //     </Routes>
  //     <footer>our footer</footer>
  //   </BrowserRouter>
  // );
  return <RouterProvider router={router} />;
}

export default App;
