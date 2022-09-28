import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";

function App() {
  var domain = window.location.host;
  var refineDomain = domain.split(".")[0];

  if (refineDomain === "localhost:3000") {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path="/" element={<SignUp />} />
      </Routes>
    );
  }
}

export default App;
