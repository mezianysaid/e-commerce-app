// export const ListProducts = (state) => state.getProductReducer.products;

export const addProduct = (state) => state.getProductReducer.data;
export const getDetails = (state) => state.productDetails.product;
export const updateProduct = (state) => state.getProductReducer.data;
export const deleteProduct = (state) => state.getProductReducer.data;

export const getProductCart = (state) => state.cartReducer.cart