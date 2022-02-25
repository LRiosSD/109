import React from "react";

// store context describes data functions you want to share
// between components

const storeContext = React.createContext({
    cart: [],
    user: {},

    addProductToCart:(product)  => {},
    
    removeProductFromCart: (productId) => {},

});

export default storeContext