import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout';

const Home = lazy(() => import('../pages/Home'));
const Flights = lazy(() => import('../pages/Flights'));
const Hotels = lazy(() => import('../pages/Hotels'));

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="flights" element={<Flights />} />
      <Route path="hotels" element={<Hotels />} />
    </Route>
  </Routes>
);

export default App;
