import { configureStore } from "@reduxjs/toolkit";
import authReducer from './fetures/auth/authSlice'
import { baseApi } from "./api/baseApi";
import storage from "redux-persist/lib/storage";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";


const presistConfig={
    key:`auth`,
    storage
}

const persisAuthReducer=persistReducer(presistConfig,authReducer)


export const store = configureStore({
    reducer:{
        [baseApi.reducerPath]:baseApi.reducer,
        auth:persisAuthReducer
    },
    middleware:(getDefaultMiddlelewares)=>
        getDefaultMiddlelewares({
            serializableCheck:{
                ignoredActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
            }
        }).concat(baseApi.middleware)

    
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const persistor=persistStore(store)