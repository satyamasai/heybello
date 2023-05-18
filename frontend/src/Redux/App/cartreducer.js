const initState = {
  cart: [],
  isLoading: false,
  isError: false,
};

const cartreducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_CART_ITEMS":
      return { ...state, cart: payload };

    default:
      return state;
  }
};

export default cartreducer;
