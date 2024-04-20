import { thunk, ThunkAction } from 'redux-thunk';

import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore, UnknownAction } from "redux";
import rootReducer from './reducers';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(rootReducer, composedEnhancer);

export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType> = ThunkAction<ReturnType, RootState, undefined, UnknownAction>;
export type RootState = ReturnType<typeof store.getState>;

export default store;