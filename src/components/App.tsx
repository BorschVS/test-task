import { FC, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from 'components';

import { Page } from 'types/interfaces';

const Home = lazy(() => import('../pages/Home'));
const Flights = lazy(() => import('../pages/Flights'));
const Hotels = lazy(() => import('../pages/Hotels'));
const Error = lazy(() => import('../pages/Error'));

const pages: Page[] = [
  { path: '/', element: <Home />, index: true },
  { path: 'flights', element: <Flights /> },
  { path: 'hotels', element: <Hotels /> },
  { path: '*', element: <Error /> },
];

const App: FC = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      {pages.map(({ path, index, element }) =>
        index ? (
          <Route key={path} index element={element} />
        ) : (
          <Route key={path} path={path} element={element} />
        )
      )}
    </Route>
  </Routes>
);

export default App;
