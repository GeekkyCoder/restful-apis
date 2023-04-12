import { useEffect } from "react";
import axios from "axios";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

import Home from "./pages/Home/Home";
import {
  SET_CART_ITEMS_START,
  SET_CART_ITEMS_SUCCESS,
  SET_CART_ITEMS_FAILED,
} from "./store/cart/cart.actions";

import {
  fetch_catogries_start,
  fetch_catogories_success,
  fetch_Catogories_fail,
} from "./store/catogories/catogories.actions";

import { cartCountSelector } from "./store/cart/cartSelector";

import { currentUserSelector } from "./store/user/user.selector";

function App() {
  const dispatch = useDispatch();
  const cartCount = useSelector(cartCountSelector);
  const currentUser = useSelector(currentUserSelector);

  useEffect(() => {
    const fetchCatogories = async () => {
      dispatch(fetch_catogries_start());
      try {
        const data = await axios.get("http://localhost:8000/products");
        dispatch(fetch_catogories_success(data.data));
      } catch (err) {
        dispatch(fetch_Catogories_fail(err));
      }
    };
    fetchCatogories();
  }, []);

  useEffect(() => {
    const fetchCartData = async () => {
      dispatch(SET_CART_ITEMS_START());
      try {
        const data = await axios.get("http://localhost:8000/cart",{
          headers:{
            Authorization:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDMyODNlOWM5MjA4YTA4M2M2MTJiZTciLCJ1c2VybmFtZSI6ImZpYXogYWhtZWQiLCJpYXQiOjE2ODEwNjI3MjksImV4cCI6MTY4MzY1NDcyOX0.Uzm7ErLz6GGjXpwmERJIWuwK7yyY_bG_eGMKh0PyCWs`
          }
        });
        const cartItems = data.data;
        dispatch(SET_CART_ITEMS_SUCCESS(cartItems));
      } catch (err) {
        dispatch(SET_CART_ITEMS_FAILED(err));
      }
    };
    fetchCartData();
  }, [cartCount]);

  useEffect(() => {
    localStorage.getItem("token")

  }, []);

  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
