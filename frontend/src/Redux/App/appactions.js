import axios from "axios";
import { GET_ALL_CART_ITEMS, GET_ALL_PRODUCTS } from "../../Utils/url";
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
    const hbToken= await JSON.parse(localStorage.getItem("hbToken"))
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
    }