import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducer';
const myLog = (store) => (next) => (action) => {
    console.log(action)

    next(action)

}

export default createStore(rootReducer, compose(applyMiddleware(myLog), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))