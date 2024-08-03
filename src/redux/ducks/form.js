const SET_FORM_DATA = 'SET_FORM_DATA';

const initialState = {
    formData: "",
};

export const form = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_FORM_DATA:
            return {
                ...state,
                formData: JSON.stringify(payload, null, 2),
            };
        default:
            return state;
    }
};

export const setFormData = (payload) => ({
    type: SET_FORM_DATA,
    payload,
})