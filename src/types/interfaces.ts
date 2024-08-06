import { ReactNode, ElementType, MouseEventHandler } from 'react';

import { SET_FORM_DATA } from '../redux/ducks/form';
import { CHEAP_VALUE, FAST_VALUE } from '../constants';

import {
  GET_FLIGHTS,
  SET_FLIGHTS,
  SET_FLIGHTS_LOADING,
  SET_FLIGHTS_ERROR,
  SET_STOPS_FILTER,
  SET_ALL_STOPS,
  SET_STOPS_FILTER_STATUS,
  SET_CATEGORY_FILTER,
} from '../redux/ducks/flights';
import { SET_CURRENT_FLIGHT, SET_IS_SHOWING } from '../redux/ducks/modal';
import {
  GET_IMAGE_FAILURE,
  GET_IMAGE_REQUEST,
  GET_IMAGE_SUCCESS,
} from '../redux/ducks/images';

// redux

export interface FlightData {
  id: string;
  searchId: string;
  price: number;
  carrier: string;
  segments: FlightSegments[];
}

export interface FlightSegments {
  origin: string;
  destination: string;
  date: string;
  stops: string[];
  duration: number;
}

export interface FlightsState {
  availableFlights: FlightData[];
  filteredFlights: FlightData[];
  stopsFilter: number[];
  stopsFilterStatus: boolean;
  flightCategoryFilter: string;
  loading: boolean;
  error: Error | string | null;
}

export interface ModalState {
  isShowing: boolean;
  flightId: string;
}

export interface FormState {
  formData: string;
}

export interface ImagesState {
  images: { [key: string]: string };
  loading: boolean;
  error: string | null;
}

export interface ReduxState {
  flights: FlightsState;
  modal: ModalState;
  form: FormState;
  images: ImagesState;
}

// /flights

// actions

export interface GetFlightsAction {
  type: typeof GET_FLIGHTS;
}

export interface SetFlightsAction {
  type: typeof SET_FLIGHTS;
  payload: FlightData[];
}

export interface SetFlightsLoadingAction {
  type: typeof SET_FLIGHTS_LOADING;
  payload: boolean;
}

export interface SetFlightsErrorAction {
  type: typeof SET_FLIGHTS_ERROR;
  payload: string;
}

export interface SetStopsFilterAction {
  type: typeof SET_STOPS_FILTER;
  payload: number[];
}

export interface SetAllStopsAction {
  type: typeof SET_ALL_STOPS;
  payload: number[];
}

export interface SetStopsFilterStatusAction {
  type: typeof SET_STOPS_FILTER_STATUS;
  payload: boolean;
}

export interface SetCategoryFilterAction {
  type: typeof SET_CATEGORY_FILTER;
  payload: typeof CHEAP_VALUE | typeof FAST_VALUE;
}

// /form

// actions

export interface SetFormDataAction {
  type: typeof SET_FORM_DATA;
  payload: string;
}

// /modal

export interface SetIsShowing {
  type: typeof SET_IS_SHOWING;
  payload: boolean;
}

export interface SetCurrentFlight {
  type: typeof SET_CURRENT_FLIGHT;
  payload: number;
}

// /images

// actions

export interface GetImageRequestAction {
  type: typeof GET_IMAGE_REQUEST;
  payload: string;
}

export interface GetImageSuccessAction {
  type: typeof GET_IMAGE_SUCCESS;
  payload: {
    imageName: string;
    imageUrl: string;
  };
}

export interface GetImageFailureAction {
  type: typeof GET_IMAGE_FAILURE;
  payload: string;
}

// Props

export interface FlightCardProps {
  flightData: FlightData;
}

export interface ModalProps {
  isShowing: boolean;
  hide: MouseEventHandler<HTMLAnchorElement>;
}

// image

export interface Image {
  imageName: string;
  alt?: string;
  component?: ElementType;
  children?: ReactNode;
  width?: number;
  height?: number;
  margin?: string;
}

// theme

export interface Theme {
  palette: {
    background: {
      default: string;
      paper: string;
    };
    text: {
      primary: string;
      secondary: string;
      disabled: string;
    };
    primary: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
    secondary: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
    error: {
      main: string;
    };
  };
  typography: {
    fontFamily: string;
    fontWeightMedium: number;
    fontWeightRegular: number;
    fontWeightBold: number;
  };
  breakpoints: {
    values: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
  };
}
