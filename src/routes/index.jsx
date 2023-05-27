import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Caja,
  CajaUsuario,
  Cajas,
  CajasAgente,
  ComprobantedePago,
  Depositos,
  Login,
  Login2,
  ReportesdeAperturayCierres,
} from "../ui-components";
import { Guards } from "../helpers/guards"; // colocar guard a las rutas

function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/login2" component={Login2} exact />
      <Route path="/caja" element={<Caja />}></Route>
      <Route path="/comprobante-pago" element={<ComprobantedePago />}></Route>
      <Route path="/cajas-agente" element={<CajasAgente />}></Route>
      <Route path="/depositos" element={<Depositos />}></Route>
      <Route path="/cajas" element={<Cajas />}></Route>
      <Route path="/caja-usuario" element={<CajaUsuario />}></Route>
      <Route path="/reportes" element={<ReportesdeAperturayCierres />}></Route>
    </Routes>
  );
}

export default RoutesComponent;
