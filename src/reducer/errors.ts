import { CREDENTIALS, RESET } from '../constants/actions';


const errorReducer = (state = { errorsData: null }, action: any) => {
    switch (action.type) {
        case CREDENTIALS:
            return{
                message: "Email et/ou mot de passe incorrect(s).",
                isError: true
            };
        case RESET:
            return { isError: false };
        default:
            return state;
    }
}
    
    export default errorReducer;