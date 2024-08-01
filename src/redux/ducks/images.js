import { call, put, takeEvery } from "redux-saga/effects";

export const GET_IMAGE_REQUEST = 'GET_IMAGE_REQUEST';
export const GET_IMAGE_SUCCESS = 'GET_IMAGE_SUCCESS';
export const GET_IMAGE_FAILURE = 'GET_IMAGE_FAILURE';

// actions

export const getImageRequest = (imageName) => ({
    type: GET_IMAGE_REQUEST,
    payload: imageName,
});

export const getImageSuccess = (imageName, imageUrl) => ({
    type: GET_IMAGE_SUCCESS,
    payload: { imageName, imageUrl },
});

export const getImageFailure = (error) => ({
    type: GET_IMAGE_FAILURE,
    payload: error,
});

const initialState = {
    images: {},
    loading: false,
    error: null,
};

// reducer

export default function imageReducer(state = initialState, { type, payload }) {
    switch (type) {
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
                    [payload.imageName]: payload.imageUrl,
                },
            };
        case GET_IMAGE_FAILURE:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        default:
            return state;
    }
};

// saga

function* getImage({ payload }) {
    try {
        const imageUrl = `/images/${payload}`;
        const response = yield call(fetch, imageUrl);
        if (!response.ok) {
            throw new Error('Response was not ok');
        }
        yield put(getImageSuccess(payload, imageUrl));
    } catch (error) {
        yield put(getImageFailure(error.toString()));
        throw new Error(error.message);
    }
}

export function* watchImagesSaga() {
    yield takeEvery(GET_IMAGE_REQUEST, getImage);
}