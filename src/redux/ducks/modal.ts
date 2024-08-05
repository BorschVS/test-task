import { ModalState } from 'types/interfaces';
import { ModalActions } from 'types/types';

export const SET_IS_SHOWING = 'SET_IS_SHOWING';
export const SET_CURRENT_FLIGHT = 'SET_CURRENT_FLIGHT';

const initialState: ModalState = {
  isShowing: false,
  flightId: '',
};

export const modal = (state = initialState, action: ModalActions) => {
  switch (action.type) {
    case SET_IS_SHOWING:
      return {
        ...state,
        isShowing: action.payload,
      };
    case SET_CURRENT_FLIGHT:
      return {
        ...state,
        flightId: action.payload,
      };
    default:
      return state;
  }
};

export const setIsShowing = (payload: boolean) => ({
  type: SET_IS_SHOWING,
  payload,
});

export const setCurrentFlight = (payload: string) => ({
  type: SET_CURRENT_FLIGHT,
  payload,
});
