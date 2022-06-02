import React from "react";
import { Testimonials } from "./components/testimonials";
import "./styles/app.css";

function App() {
  return (
    <div className="App">
      <div>
        <h1>This is what our students say about us:</h1>
        <Testimonials />
      </div>
    </div>
  );
}

export default App;
