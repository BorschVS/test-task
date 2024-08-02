import { useDispatch, useSelector } from 'react-redux';
import { setIsShowing } from '../redux/ducks/modal';
import { ReduxState } from 'interfaces';

export const useModal = () => {
  const dispatch = useDispatch();
  const isShowing = useSelector((state: ReduxState) => state.modal.isShowing);

  const toggleModal = () => {
    dispatch(setIsShowing(!isShowing));
  };

  return {
    isShowing,
    toggleModal,
  };
};
