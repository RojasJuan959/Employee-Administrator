import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FireProvider } from "./Context/FireContext.js";
import Session from "./Page/Session.js";
import Home from "./Page/Home.js";

import "./App.css";

function App() {
  return (
    <div className="App">
      <FireProvider>
        <Router>
          <Routes>
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/" element={<Session />}></Route>
          </Routes>
        </Router>
      </FireProvider>
    </div>
  );
}

export default App;
