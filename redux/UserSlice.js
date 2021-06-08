import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

const initialState = {
  token: "",
  name: "",
  isLoggedIn: false,
  isAdmin: false,
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: action.payload?.name,
          token: action.payload?.token,
          isAdmin: action.payload?.isAdmin,
        })
      );
      state.name = action.payload?.name;
      state.token = action.payload?.token;
      state.isAdmin = action.payload?.isAdmin;
      state.isLoggedIn = true;
    },
    logoutUser: () => {
      localStorage.removeItem("user");
      return initialState;
    },
  },
});

export const useUser = () => {
  const dispatch = useDispatch();
  const { loginUser, logoutUser } = UserSlice.actions;

  const userDispatch = {
    loginUser: (data) => dispatch(loginUser(data)),
    logout: () => dispatch(logoutUser()),
  };

  const userState = useSelector((state) => state.user);
  return { userState, userDispatch };
};

export default UserSlice.reducer;
