import "./App.css";
import { Login, Login2 } from "./ui-components";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/login2" element={<Login2 />}></Route>
      </Routes>
    </>
  );
};

export default App;
