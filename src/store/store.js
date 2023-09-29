import cart from "./cart";

const { configureStore } = require("@reduxjs/toolkit");

export default appStore = configureStore({
    reducer:{
        cart
    }
})