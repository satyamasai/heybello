import axios from "axios";
import {
  GET_ALL_CART_ITEMS,
  GET_ALL_PRODUCTS,
  GET_PRODUCTS_BY_TYPE,
} from "../../Utils/url";
export const getItems = (dispatch) => {
  axios
    .get(GET_ALL_PRODUCTS)
    .then((res) => {
      dispatch({ type: "GET_ITEMS", payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

// ---get cart items----

export const getcartItems = async (dispatch) => {
  const hbToken = await JSON.parse(localStorage.getItem("hbToken"));
  axios
    .get(GET_ALL_CART_ITEMS, {
      headers: {
        Authorization: `Bearer ${hbToken}`,
      },
    })
    .then((res) => {
      dispatch({ type: "GET_CART_ITEMS", payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

// get products by brand name -------------
export const getProductsByCategory = (dispatch,productname)=> {
  // console.log(productname,"pna")
  axios
    .get(`${GET_PRODUCTS_BY_TYPE}/${productname}`)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: "GET_PRODUCTS_BY_TYPE", payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};
