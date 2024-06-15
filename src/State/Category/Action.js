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

import { api } from '../../config/apiConfig';

export const getCategories = () => async (dispatch) => {
    dispatch({ type: GET_CATEGORIES_REQUEST });
    try {
        const { data } = await api.get('/api/categories/findAllLevel3');
        dispatch({
            type: GET_CATEGORIES_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: GET_CATEGORIES_FAILURE,
            payload: error.message,
        });
    }
};

export const getCategoryByName = (name) => async (dispatch) => {
    dispatch({ type: GET_CATEGORY_BY_NAME_REQUEST });
    try {
        const { data } = await api.get(`/api/category?name=${name}`);
        dispatch({
            type: GET_CATEGORY_BY_NAME_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: GET_CATEGORY_BY_NAME_FAILURE,
            payload: error.message,
        });
    }
};

export const getCategoryByNameAndParent = (name, parentCategoryName) => async (dispatch) => {
    dispatch({ type: GET_CATEGORY_BY_NAME_AND_PARENT_REQUEST });
    try {
        const { data } = await api.get(`/api/category?name=${name}&parentCategoryName=${parentCategoryName}`);
        dispatch({
            type: GET_CATEGORY_BY_NAME_AND_PARENT_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: GET_CATEGORY_BY_NAME_AND_PARENT_FAILURE,
            payload: error.message,
        });
    }
};


