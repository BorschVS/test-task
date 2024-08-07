import { useDispatch, useSelector } from 'react-redux';
import { setIsShowing } from '../redux/ducks/modalSlice';
import { ReduxState } from '../types/interfaces';
import { AppDispatch } from 'redux/configureStore';

export const useModal = () => {
  const dispatch: AppDispatch = useDispatch();
  const isShowing: boolean = useSelector(
    (state: ReduxState) => state.modal.isShowing
  );

  const toggleModal = () => {
    dispatch(setIsShowing(!isShowing));
  };

  return {
    isShowing,
    toggleModal,
  };
};
