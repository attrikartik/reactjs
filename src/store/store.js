import cart from "./cart";

const { configureStore } = require("@reduxjs/toolkit");

const appStore = configureStore({
    reducer:{
        cart
    }
})

export default appStore