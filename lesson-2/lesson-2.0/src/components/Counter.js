import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, ButtonGroup, Badge } from "reactstrap";

const initialState = {
  counter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { ...state, counter: state.counter + action.payload };
    case "Decrement":
      return { ...state, counter: state.counter - action.payload };
    case "Reset":
      return initialState;
    default:
      return state;
  }
};
const Counter = () => {
  const [state1, dispatch1] = useReducer(reducer, initialState);
  const [state2, dispatch2] = useReducer(reducer, initialState);

  return (
    <div>
      <ButtonGroup>
        <Button color="primary" outline>
          Counter 1 <Badge color="secondary">{state1.counter}</Badge>
        </Button>
        <Button color="primary" outline>
          Counter 2 <Badge color="secondary">{state2.counter}</Badge>
        </Button>
      </ButtonGroup>
      <p></p>
      <ButtonGroup>
        <Button
          color="dark"
          onClick={() => dispatch1({ type: "Increment", payload: 1 })}
        >
          Increment
        </Button>
        <Button
          color="dark"
          onClick={() => dispatch1({ type: "Decrement", payload: 1 })}
        >
          Decrement
        </Button>
        <Button color="danger" onClick={() => dispatch1({ type: "Reset" })}>
          Reset
        </Button>
      </ButtonGroup>
      <p></p>
      <ButtonGroup>
        <Button
          color="dark"
          onClick={() => dispatch2({ type: "Increment", payload: 1 })}
        >
          Increment
        </Button>
        <Button
          color="dark"
          onClick={() => dispatch2({ type: "Decrement", payload: 1 })}
        >
          Decrement
        </Button>
        <Button color="danger" onClick={() => dispatch2({ type: "Reset" })}>
          Reset
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Counter;
