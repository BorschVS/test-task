import {
  GetImageFailureAction,
  GetImageRequestAction,
  GetImageSuccessAction,
  ImagesState,
} from 'interfaces';
import { call, put, takeEvery } from 'redux-saga/effects';
import { ImagesActions } from 'types';

export const GET_IMAGE_REQUEST = 'GET_IMAGE_REQUEST';
export const GET_IMAGE_SUCCESS = 'GET_IMAGE_SUCCESS';
export const GET_IMAGE_FAILURE = 'GET_IMAGE_FAILURE';

const initialState: ImagesState = {
  images: {},
  loading: false,
  error: null,
};

// reducer

export const imagesReducer = (state = initialState, action: ImagesActions) => {
  switch (action.type) {
    case GET_IMAGE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_IMAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        images: {
          ...state.images,
          [action.payload.imageName]: action.payload.imageUrl,
        },
      };
    case GET_IMAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// actions

export const getImageRequest = (payload: string): GetImageRequestAction => ({
  type: GET_IMAGE_REQUEST,
  payload: payload,
});

export const getImageSuccess = (
  imageName: string,
  imageUrl: string
): GetImageSuccessAction => ({
  type: GET_IMAGE_SUCCESS,
  payload: { imageName, imageUrl },
});

export const getImageFailure = (error: string): GetImageFailureAction => ({
  type: GET_IMAGE_FAILURE,
  payload: error,
});

// saga

function* getImage(action: GetImageRequestAction) {
  try {
    const imageUrl = `/images/${action.payload}`;
    const response: Response = yield call(fetch, imageUrl);
    if (!response.ok) {
      throw new Error('Response was not ok');
    }
    yield put(getImageSuccess(action.payload, imageUrl));
  } catch (error) {
    yield put(
      getImageFailure(error instanceof Error ? error.message : 'Unknown error')
    );
  }
}

export function* watchImagesSaga() {
  yield takeEvery(GET_IMAGE_REQUEST, getImage);
}
