import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import PageNotFound from "./components/PageNotFound";
import ProtectedRoutes from "./components/protectedRoutes";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <ProtectedRoutes path="/about" exact component={About} />
          <ProtectedRoutes path="/contact" exact component={Contact} />
          <ProtectedRoutes path="/posts/:post_id" exact component={Post} />
          <Route exact component={PageNotFound}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
