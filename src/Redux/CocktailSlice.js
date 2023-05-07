import { createAsyncThunk, createSlice} from "@reduxjs/toolkit"

export const fetchCocktail = createAsyncThunk(
    "cocktail/fetchCocktails", async() => {
        return fetch("https://thecocktaildb.com/api/json/v1/1/search.php?s=").then((res) => res.json())
    }
)

export const fetchSingleCocktail = createAsyncThunk(
    "cocktail/fetchSingleCocktails", async({id}) => {
        return fetch(`https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`).then((res) => res.json())
    }
)
export const fetchSearchCocktail = createAsyncThunk(
    "cocktail/fetchSearchCocktails", async({searchText}) => {
        return fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`).then((res) => res.json())
    }
)


const cocktailSlice = createSlice({
    name : "cocktails",
    initialState : {
        loading : false,
        cocktail : [],
        cocktails : [],
        error : null,
    },
    extraReducers : {
        [fetchCocktail.pending] : (state,action) => {
            state.loading = true;
        },
        [fetchCocktail.fulfilled] : (state,action) => {
            state.loading = false;
            state.cocktails = action.payload.drinks
        },
        [fetchCocktail.rejected] : (state,action) => {
            state.loading = false;
            state.error = action.payload
        },
        [fetchSearchCocktail.pending] : (state,action) => {
            state.loading = true;
        },
        [fetchSearchCocktail.fulfilled] : (state,action) => {
            state.loading = false;
            state.cocktails = action.payload.drinks
        },
        [fetchSearchCocktail.rejected] : (state,action) => {
            state.loading = false;
            state.error = action.payload
        },
        [fetchSingleCocktail.pending] : (state,action) => {
            state.loading = true;
        },
        [fetchSingleCocktail.fulfilled] : (state,action) => {
            state.loading = false;
            state.cocktail = action.payload.drinks
        },
        [fetchSingleCocktail.rejected] : (state,action) => {
            state.loading = false;
            state.error = action.payload
        },
    }
})

export default cocktailSlice.reducer;
