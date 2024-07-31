import { useDispatch, useSelector } from "react-redux";
import { setIsShowing } from "../redux/modules/modal/actions";

export const useModal = () => {
    const dispatch = useDispatch();
    const isShowing = useSelector(state => state.modal.isShowing)

    const toggleModal = () => {
      dispatch(setIsShowing(!isShowing));
    };
  
    return {
      isShowing,
      toggleModal
    };
  };