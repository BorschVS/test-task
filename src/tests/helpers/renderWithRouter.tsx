import { render } from '@testing-library/react';
import { App } from 'components';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from 'redux/configureStore';
import { act, ReactNode } from 'react';

export const renderWithRouter = (
  component: ReactNode,
  initialRoute: string = '/'
) => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[initialRoute]}>
        <App />
        {component}
      </MemoryRouter>
    </Provider>
  );
};
