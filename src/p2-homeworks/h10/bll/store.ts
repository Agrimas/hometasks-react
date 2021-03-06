
import {combineReducers, createStore} from 'redux';
import {loadingReducer} from './loadingReducer';
import {themeReducer} from '../../h12/bll/themeReducer';

export const reducers = combineReducers({
    loading: loadingReducer,
    theme: themeReducer
});

const store = createStore(reducers);

export default store

export type AppStoreType = typeof store;
export type RootState = ReturnType<typeof store.getState>

// @ts-ignore
window.store = store; // for dev
