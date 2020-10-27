import * as React from "react";
import { Store } from "./Store";
import "./styles.css";

const App: React.FC = () => {
  const store = React.useContext(Store);

  return (
    <div className="App">
      <h1>Favorite App</h1>
    </div>
  );
};

export default App;
