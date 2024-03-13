import "./App.css";
import { useState } from "react";
import { Header } from "./components/Header.js";
import { Footer } from "./components/Footer.js";
import { Grid } from "./components/Grid.js";

export const initialOXGrid = [
  { id: 1, locationName: "top-left", value: "" },
  { id: 2, locationName: "top-centre", value: "" },
  { id: 3, locationName: "top-right", value: "" },
  { id: 4, locationName: "middle-left", value: "" },
  { id: 5, locationName: "middle-centre", value: "" },
  { id: 6, locationName: "middle-right", value: "" },
  { id: 7, locationName: "bottom-left", value: "" },
  { id: 8, locationName: "bottom-centre", value: "" },
  { id: 9, locationName: "bottom-right", value: "" },
];

function App() {
  return (
    <div className="App">
      <Header />
      <Grid />
      <Footer />
    </div>
  );
}

export default App;
