import  { GET_KRUPTOS } from '../actions/types';

const initialState = {
    kruptos: {
        'count' : 0,
        'next' : '',
        'previous': '',
        'results' :[{
            'id' : -1,
            'for_person' :'',
            'message' :'Loading',
            'created_at' :''
        }]
    }
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_KRUPTOS:
            return {
                ...state,
                kruptos: action.payload
            };
        default:
            return state;
    }
}