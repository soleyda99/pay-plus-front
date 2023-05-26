import "./App.css";
import {
  Login,
  Login2,
  Caja,
  CajasAgente,
  Depositos,
  CajaUsuario,
  Cajas,
  ComprobantedePago,
  ReportesdeAperturayCierres,
} from "./ui-components";
import "@aws-amplify/ui-react/styles.css";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/login2" element={<Login2 />}></Route>
        <Route path="/caja" element={<Caja />}></Route>
        <Route path="/cajas-agente" element={<CajasAgente />}></Route>
        <Route path="/depositos" element={<Depositos />}></Route>
        <Route path="/cajas" element={<Cajas />}></Route>
        <Route path="/cajaUsuario" element={<CajaUsuario />}></Route>
        <Route
          path="/reportes"
          element={<ReportesdeAperturayCierres />}
        ></Route>
        <Route
          path="/comprobantedePago"
          element={<ComprobantedePago />}
        ></Route>
      </Routes>
    </>
  );
};

export default App;
