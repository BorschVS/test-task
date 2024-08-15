import { render, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ReactNode } from 'react';
import store from 'redux/configureStore';

export const renderWithProvider = (
  component: ReactNode
): RenderResult & { asFragment: () => DocumentFragment } => {
  const utils = render(<Provider store={store}>{component}</Provider>);

  return {
    ...utils,
    asFragment: utils.asFragment,
  };
};
