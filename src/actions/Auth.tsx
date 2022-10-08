import { AppDispatch } from '../index';
import * as api from '../api'
import { AUTH, CREDENTIALS, RESET } from '../constants/actions';

interface IAuth {
    login: string,
    password: string
}

/*----- Login Method -----*/
export const signin = (formData: IAuth) => async (dispatch: AppDispatch) => {
    try {
        const { data } = await api.signIn(formData);

        dispatch({
            type: AUTH,
            data
        });

    } catch (error: any) {
        
        if(error.response.status === 401)
        {
            dispatch({
                type: CREDENTIALS,
                error
            });
        }
    }
}

/*----- Reseting error store -----*/

export const resetErrors = (dispatch: AppDispatch) =>{
    dispatch({ type: RESET });
}