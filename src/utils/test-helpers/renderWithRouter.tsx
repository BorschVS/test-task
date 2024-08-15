import { render, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from 'redux/configureStore';
import { ReactNode } from 'react';
import { App } from 'components';

export const renderWithRouter = (
  component: ReactNode,
  initialRoute: string = '/'
): RenderResult & { asFragment: () => DocumentFragment } => {
  const utils = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[initialRoute]}>
        <App />
        {component}
      </MemoryRouter>
    </Provider>
  );

  return {
    ...utils,
    asFragment: utils.asFragment,
  };
};
