import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, auth,reset } from "./actions";
function App() {
  const counter = useSelector((state) => state.counter);
  const login = useSelector((state) => state.login);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>{counter}</h1>
      <div
        class="btn-group"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <button
          type="button"
          class="btn btn-success"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          type="button"
          class="btn btn-danger"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          type="button"
          class="btn btn-info"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
      <p>{login ? <h3>Logined</h3> : <h3>Not Yet</h3>}</p>
      <button
        type="button"
        class={`btn btn-${login ? "danger" : "success"}`}
        onClick={() => dispatch(auth())}
      >
        {login ? "LogOut" : "Log in"}
      </button>
    </div>
  );
}

export default App;
