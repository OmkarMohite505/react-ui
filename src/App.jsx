import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import RegistrationComponent from "./components/Registration";
import { Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/register"
          element={<RegistrationComponent />}
        ></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
