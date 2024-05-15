import { ThunkAction } from 'redux-thunk';
import { UnknownAction } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import { tmdbApi } from './services/tmbd';
import { setupListeners } from '@reduxjs/toolkit/query';
import { useDispatch } from 'react-redux';

const store = configureStore({
    reducer: {
        [tmdbApi.reducerPath]:tmdbApi.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(tmdbApi.middleware)
});
setupListeners(store.dispatch);  //щоб відбувався реконект при відключенні мережі

export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType> = ThunkAction<ReturnType, RootState, undefined, UnknownAction>;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = useDispatch<AppDispatch>;

export default store;