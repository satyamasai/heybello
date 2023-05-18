const initState = {
  cart: [],
  items:[],
  products_by_type:[],
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

case "GET_PRODUCTS_BY_TYPE":
   return {...state,products_by_type:payload }

    default:
      return state;
  }
};

export default appreducer;
