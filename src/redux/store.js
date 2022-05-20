import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import reducer from "./reducers";

const store = createStore(
    reducer,
    compose(applyMiddleware(thunk),
        typeof window === 'object' &&
        typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' &&
        process.env.REACT_APP_API_URL.toString().includes('localhost') ?
            window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);

export default store;