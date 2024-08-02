import { CHEAP_VALUE, FAST_VALUE } from '../constants';

import {
  GetFlightsAction,
  SetAllStopsAction,
  SetFlightsAction,
  SetFlightsErrorAction,
  SetFlightsLoadingAction,
  SetStopsFilterAction,
  SetStopsFilterStatusAction,
  SetCategoryFilterAction,
  SetFormDataAction,
  SetIsShowing,
  SetCurrentFlight,
  GetImageRequestAction,
  GetImageSuccessAction,
  GetImageFailureAction,
} from 'interfaces';

// /flights

export type FlightActions =
  | GetFlightsAction
  | SetFlightsAction
  | SetFlightsLoadingAction
  | SetFlightsErrorAction
  | SetStopsFilterAction
  | SetAllStopsAction
  | SetStopsFilterStatusAction
  | SetCategoryFilterAction;

export type FlightCategory = typeof CHEAP_VALUE | typeof FAST_VALUE;

// /form

export type FormActions = SetFormDataAction;

// /modal

export type ModalActions = SetIsShowing | SetCurrentFlight;

// /images

export type ImagesActions =
  | GetImageRequestAction
  | GetImageSuccessAction
  | GetImageFailureAction;
