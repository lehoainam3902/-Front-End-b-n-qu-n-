import {
    GET_CATEGORIES_REQUEST,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAILURE,
    GET_CATEGORY_BY_NAME_REQUEST,
    GET_CATEGORY_BY_NAME_SUCCESS,
    GET_CATEGORY_BY_NAME_FAILURE,
    GET_CATEGORY_BY_NAME_AND_PARENT_REQUEST,
    GET_CATEGORY_BY_NAME_AND_PARENT_SUCCESS,
    GET_CATEGORY_BY_NAME_AND_PARENT_FAILURE,
} from './ActionType';

const initialState = {
    categories: [],
    category: null,
    error: null,
    loading: false,
}

export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORIES_REQUEST:
        case GET_CATEGORY_BY_NAME_REQUEST:
        case GET_CATEGORY_BY_NAME_AND_PARENT_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                loading: false,
                categories: action.payload,
                error: null,
            };
        case GET_CATEGORY_BY_NAME_SUCCESS:
        case GET_CATEGORY_BY_NAME_AND_PARENT_SUCCESS:
            return {
                ...state,
                loading: false,
                category: action.payload,
                error: null,
            };
        case GET_CATEGORIES_FAILURE:
        case GET_CATEGORY_BY_NAME_FAILURE:
        case GET_CATEGORY_BY_NAME_AND_PARENT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
