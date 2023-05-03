import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as ContainerNavigation } from "react-router-dom";
import MrSolucoesRoutes from "./routes";

function App() {
  return (
    <div className="App">
      <ContainerNavigation>
        <MrSolucoesRoutes />
      </ContainerNavigation>
    </div>
  );
}

export default App;
