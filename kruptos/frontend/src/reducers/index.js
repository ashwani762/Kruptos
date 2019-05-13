import { combineReducers } from 'redux';
import kruptos from './kruptos';
import submitKryptos from './submitKryptos';

export default combineReducers({
    kruptos,
    submitKryptos
});