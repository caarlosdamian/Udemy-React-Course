import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Badge, ButtonGroup, Button } from "reactstrap";
import useCounter from "../customHook/useCounter";

const Component = () => {
  const [count, increment, decrement, reset] = useCounter(10);
  return (
    <div>
      <ButtonGroup>
        <Button color="primary" outline>
          Left Component A Couner{" "}
          <Badge style={{ backgroundColor: "gray" }}>{count}</Badge>
        </Button>
      </ButtonGroup>
      <p></p>
      <ButtonGroup>
        <Button color="primary" onClick={increment}>
          Increment
        </Button>
        <Button color="secondary" onClick={decrement}>
          Decrement
        </Button>
        <Button color="danger" onClick={reset}>
          Reset
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Component;
