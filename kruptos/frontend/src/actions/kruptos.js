import axios from 'axios';

import  { GET_KRUPTOS, KRYPTO_SUBMITTED, KRYPTO_SET_INITIAL, KRYPTO_ERROR } from './types';

// Get Kruptos

export const getKruptos = (id) => (dispatch) => {
    axios
        .get(`api/kruptos/?page=${id}`)
        .then(res => {
            dispatch({
                type: GET_KRUPTOS,
                payload: res.data
            });
        }).catch(err => console.log(err));
};

export const submitKryptos = (for_person, message) => dispatch => {

    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    }

    const body = JSON.stringify({ for_person, message })

    axios.post('/api/kruptos/', body, config)
    .then(res => {
        dispatch({
            type: KRYPTO_SUBMITTED,
            payload: res.data
        });
    }).catch(err => 
        dispatch({
            type: KRYPTO_ERROR
        })
    )
}

export const setInitial = () => dispatch =>{
    dispatch({
        type: KRYPTO_SET_INITIAL
    })
}