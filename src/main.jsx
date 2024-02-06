import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Home, CategoryPage, Checkout, DetailPage } from './pages/index.js';

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const  router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path=':category' element={<CategoryPage />} />
      <Route path=':category/:headphoneSlug' element={<DetailPage />} />
      {/* <Route path='speakers/' element={<CategoryPage />} />
      <Route path='speakers/:speakerSlug' element={<DetailPage />} />
      <Route path='earphones/' element={<CategoryPage />} />
      <Route path='earphones/:earphoneSlug' element={<DetailPage />} /> */}
      <Route path='checkout' element={<Checkout />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
