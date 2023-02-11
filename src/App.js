import React from "react";
import { Navbar } from "./components/navbar";
import { Card } from "./components/card";
import { Provider } from "../src/context/PassContext";
function App() {
  return (
    <Provider>
      <Navbar />
      <Card />
    </Provider>
  );
}

export default App;
