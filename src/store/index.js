import cartDisplayReducer from "../reducers/cartDisplayReducer";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer : { cartDisplay : cartDisplayReducer.reducer

    }
});

export default store;