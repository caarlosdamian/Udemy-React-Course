import "./App.css";
import axios from "axios";
import { useEffect, useReducer } from "react";
import { Badge, ListGroup, ListGroupItem } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const initialState = {
  loading: true,
  error: "",
  todos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        loading: false,
        error: "",
        todos: action.payload,
      };
    case "SET_ERROR":
      return {
        loading: false,
        error: "There are some errors",
        todos: [],
      };
    default:
  }
  return;
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        dispatch({ type: "SET_DATA", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "SET_ERROR" });
      });
  }, []);
  const liskmarkup = (
    <ListGroup>
      {state.todos.map((todo) => (
        <ListGroupItem key={todo.id}>
          {todo.title}
          {todo.completed ? (
            <Badge style={{backgroundColor:"#28a745"}}>Completed</Badge>
          ) : (
            <Badge style={{backgroundColor:"#dc3545"}}>Incompleted</Badge>
          )}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
  return (
    <div className="App">
      {state.loading ? "Loading" : state.error ? (  <Badge style={{backgroundColor:"red"}}>{state.error}</Badge>) : liskmarkup}
    </div>
  );
}

export default App;
