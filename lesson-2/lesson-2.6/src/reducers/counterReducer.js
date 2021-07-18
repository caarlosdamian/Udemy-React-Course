
const Reducer = (state = 0, action) => {
  switch (action.type) {
    case "DECREMENT":
      return state - 1;
    case "INCREMENT":
      return state + 1;
    case "RESET":
      return state =0
    default:
      return state;
  }
};

export default Reducer;
