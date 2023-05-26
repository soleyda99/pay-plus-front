import "./App.css";
import '@aws-amplify/ui-react/styles.css'
import { ComprobantedePago, Login, Login2, CajaUsuario, Cajas } from "./ui-components";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/login2" element={<Login2 />}></Route>
        <Route path="/cajas" element={<Cajas />}></Route>
        <Route path="/cajaUsuario" element={<CajaUsuario/>}></Route>
        <Route path="/comprobantedePago" element={<ComprobantedePago />}></Route>

      </Routes>
    </>
  );
};

export default App;
