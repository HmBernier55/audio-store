import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Home, Headphones, HeadphonesDetail, Speakers, SpeakersDetail, Earphones, EarphonesDetail, Checkout } from './pages/index.js';

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const  router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='headphones' element={<Headphones />}>
        <Route path='/:headphoneSlug' element={<HeadphonesDetail />} />
      </Route>
      <Route path='speakers' element={<Speakers />}>
        <Route path='/:speakerSlug' element={<SpeakersDetail />} />
      </Route>
      <Route path='earphones' element={<Earphones />}>
        <Route path='/:earphoneSlug' element={<EarphonesDetail />} />
      </Route>
      <Route path='checkout' element={<Checkout />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
