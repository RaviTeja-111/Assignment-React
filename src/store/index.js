import cartDisplayReducer from "../reducers/cartDisplayReducer";
import cartUpdateReducer from "../reducers/cartUpdateReducer";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer: {
        cartDisplay: cartDisplayReducer.reducer,
        cartUpdate: cartUpdateReducer.reducer
    }
});

export default store;