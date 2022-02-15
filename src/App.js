// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../src/pages/login";
// import About from "../src/pages/about";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
