import { createStore, combineReducers, applyMiddleware } from 'redux'
import {reducer as formReducer} from 'redux-form'
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import contact from './reducers/contactReducer'
export default createStore(
    combineReducers({
        contact,
        form: formReducer,
    }),
    {},
    applyMiddleware(thunk, promise())
)
