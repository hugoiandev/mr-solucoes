import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";

const MrSolucoesRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
    </Routes>
  );
};

export default MrSolucoesRoutes;
