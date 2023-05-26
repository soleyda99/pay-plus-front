import "./App.css";
import { Login, Login2, Caja } from "./ui-components";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/login2" element={<Login2 />}></Route>
        <Route path="/caja" element={<Caja />}></Route>
      </Routes>
    </>
  );
};

export default App;
