import  { KRYPTO_SUBMITTED, KRYPTO_ERROR, KRYPTO_SET_INITIAL } from '../actions/types';

const initialState = {
    Kresponse : {},
    submitted: ''
}

export default function(state = initialState, action) {
    switch(action.type) {
        case KRYPTO_SUBMITTED:
            return {
                ...state,
                Kresponse: action.payload,
                submitted: 'DONE'
            };
        case KRYPTO_ERROR:
            return {
                ...state,
                submitted: 'FAILED'
            }
        case KRYPTO_SET_INITIAL:
            return {
                ...state,
                Kresponse : {},
                submitted: ''
            }
        default:
            return state;
    }
}