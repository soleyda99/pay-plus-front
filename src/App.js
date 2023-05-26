import "./App.css";
import { Login, Login2, Caja, CajasAgente, Depositos } from "./ui-components";
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
      </Routes>
    </>
  );
};

export default App;
