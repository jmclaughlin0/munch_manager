import {configureStore} from "@reduxjs/toolkit";
import munchReducer from './munchSlice'

export default configureStore({
    reducer: {
        munch: munchReducer
    },
})