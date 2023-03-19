import CART_ACTION_TYPES from "./cart.actionTypes";

const INITIAL_STATE = {
  cartItems: [],
  isLoading: false,
  error: null,
};

const cartReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS_START:
      return {
        ...state,
        isLoading: true,
      };
    case CART_ACTION_TYPES.SET_CART_ITEMS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cartItems: payload,
      };
    case CART_ACTION_TYPES.SET_CART_ITEMS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case CART_ACTION_TYPES.ADD_TO_CART:
      return {
        ...state,
        CartItems: payload,
      };
    case CART_ACTION_TYPES.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
