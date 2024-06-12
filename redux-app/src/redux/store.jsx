import {configureStore} from "@reduxjs/toolkit"
import cakeReducer from "./cakes/cakeSlice"

export default configureStore({
    reducer: {
        cake: cakeReducer
    }
})