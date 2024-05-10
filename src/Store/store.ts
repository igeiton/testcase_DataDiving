// Redux
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
// api
import { avatarsApi } from './Api/avatarsApi';
import { usersApi } from './Api/usersApi';
// slices
import usersSlice from './Slices/usersSlice';

const rootReducer = combineReducers({
    users: usersSlice,
    [usersApi.reducerPath]: usersApi.reducer,
    [avatarsApi.reducerPath]: avatarsApi.reducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            usersApi.middleware,
            avatarsApi.middleware
        ),
});

export default store;

// for TypeScript
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
