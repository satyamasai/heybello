const initState = {
  cart: [],
  items: [],
  isLoading: false,
  isError: false,
};

const appreducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_ITEMS":
      return { ...state, items: payload };

    case "GET_CART_ITEMS":
      return { ...state, cart: payload };
    default:
      return state;
  }
};

export default appreducer;
