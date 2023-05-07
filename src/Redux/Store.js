import {configureStore} from '@reduxjs/toolkit'
import cocktailSlice from './CocktailSlice'

export default configureStore({
    reducer : {
        app : cocktailSlice,
    }
})