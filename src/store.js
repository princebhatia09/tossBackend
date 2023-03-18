import { applyMiddleware,combineReducers,compose,legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk';
import { Alljobs } from './redux/AlljobsReducer'
import { PromoterReducer } from './redux/PromoterReducer';
import { UserData } from './redux/UserReducer';

const reducers = combineReducers({
    AllJobs:Alljobs,
    AllUserData:UserData,
    AllPromoters:PromoterReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers,composeEnhancer(applyMiddleware(thunk)))

export default store