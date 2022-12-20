import { FireProvider } from "./Context/FireContext.js";
import Session from "./Page/Session.js";

import "./App.css";

function App() {
  return (
    <div className="App">
      <FireProvider>
        <Session />
      </FireProvider>
    </div>
  );
}

export default App;
