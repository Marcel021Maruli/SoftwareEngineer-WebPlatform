import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./App.routes";
import "./App.css";
import { MyPokemonProvider } from "./modules/services/my-pokemon.provider";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyPokemonProvider>
          <AppRoutes />
        </MyPokemonProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
