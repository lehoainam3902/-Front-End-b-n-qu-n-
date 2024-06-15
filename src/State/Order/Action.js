
import {
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAILURE,
    GET_ORDER_BY_ID_REQUEST,
    GET_ORDER_BY_ID_SUCCESS,
    GET_ORDER_BY_ID_FAILURE,
} from "./ActionType";
import { api } from "../../config/apiConfig";


export const createOrder = (reqData) => async (dispatch) => {
    dispatch({ type: CREATE_ORDER_REQUEST });
    try {
        const { data } = await api.post(
            `/api/orders/`,
            reqData.address,
        );
        if (data.id) {
            reqData.navigate({ search: `step=3&order_id=${data.id}` });
        }
        console.log("Đã tạo đơn hàng - ", data)
        dispatch({
            type: CREATE_ORDER_SUCCESS,
            payload: data,
        });
    } catch (error) {
        console.log("Lỗi : ", error);
        dispatch({
            type: CREATE_ORDER_FAILURE,
            payload: error.message,
        });
    }
};

export const getOrderById = (orderId) => async (dispatch) => {
    dispatch({ type: GET_ORDER_BY_ID_REQUEST });
    try {

        const { data } = await api.get(
            `/api/orders/${orderId}`,
        );
        console.log("Đơn hàng theo mã", data);
        dispatch({
            type: GET_ORDER_BY_ID_SUCCESS,
            payload: data,
        });
    } catch (error) {
        console.log("catch", error)
        dispatch({
            type: GET_ORDER_BY_ID_FAILURE,
            payload: error.message
        })

    }
}