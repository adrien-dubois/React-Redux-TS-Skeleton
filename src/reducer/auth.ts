import { AUTH, LOGOUT } from "../constants/actions";

const initialState = {};

const authReducer = ( state = initialState, action: any ) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }))
            return {
                ...state,
                authData: action?.data
            };
        case LOGOUT:
            localStorage.clear();
            return window.location.href="/";
        default:
            return state;
    }
};

export default authReducer;