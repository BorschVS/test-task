import { FC, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from 'components';

import { Page } from 'types/interfaces';

const Home = lazy(() => import('../pages/Home'));
const Flights = lazy(() => import('../pages/Flights'));
const Hotels = lazy(() => import('../pages/Hotels'));

const pages: Page[] = [
  { path: '/', element: <Home />, index: true },
  { path: 'flights', element: <Flights /> },
  { path: 'hotels', element: <Hotels /> },
];

const App: FC = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      {pages.map((page) =>
        page.index ? (
          <Route key={page.path} index element={page.element} />
        ) : (
          <Route key={page.path} path={page.path} element={page.element} />
        )
      )}
    </Route>
  </Routes>
);

export default App;
