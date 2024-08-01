import { useDispatch, useSelector } from 'react-redux';
import { setIsShowing } from '../redux/ducks/modal';

export const useModal = () => {
  const dispatch = useDispatch();
  const isShowing = useSelector((state) => state.modal.isShowing);

  const toggleModal = () => {
    dispatch(setIsShowing(!isShowing));
  };

  return {
    isShowing,
    toggleModal,
  };
};
