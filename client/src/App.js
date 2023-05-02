import "./App.css";
import Register from "./pages/register/Register";
import LoginPage from "./pages/login/Login";
import Home from "./pages/home/Home";

import NavBar from "./components/navbar/NavBar.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/register" component={Register} />
          <Route exact path="/" component={Home} />

          <Route path="/login" component={LoginPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
