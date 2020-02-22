import { CHANGE_AUTH } from "./action";

const initialState = {
  lat: '',
  long: '',
  isAuth: false,
  isAdmin: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_AUTH:
      alert("Login");
      return {
        ...state,
        isAuth: action.payload,
        isAdmin: true,
      };

    default:
      return {
        state
      };
  }
};
export default reducer;
