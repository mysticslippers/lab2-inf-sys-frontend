import { configureStore } from '@reduxjs/toolkit';
import routesReducer from './routesSlice';
import locationsReducer from './locationsSlice';
import coordinatesReducer from './coordinatesSlice';
import importsReducer from './importsSlice';
import authReducer from './authSlice';

export const store = configureStore({
    reducer: {
        routes: routesReducer,
        locations: locationsReducer,
        coordinates: coordinatesReducer,
        imports: importsReducer,
        auth: authReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
