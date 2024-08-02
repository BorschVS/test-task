import { ModalState } from 'interfaces';
import { ModalActions } from 'types';

export const SET_IS_SHOWING = 'SET_IS_SHOWING';
export const SET_CURRENT_FLIGHT = 'SET_CURRENT_FLIGHT';

const initialState: ModalState = {
  isShowing: false,
  flightId: 0,
};

export const modalReducer = (state = initialState, action: ModalActions) => {
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

export const setCurrentFlight = (payload: number): ModalActions => ({
  type: SET_CURRENT_FLIGHT,
  payload,
});
