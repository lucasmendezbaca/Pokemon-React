import { BrowserRouter, Routes, Route } from "react-router-dom";
import Listado from "./listado/listado";
import Detail from "./detail/detail";
import Home from "./home/home";
import Play from "./play/play";
import Navigation from "./navigation/navigation";
import Register from "./register/register";
import Login from "./login/login";
import Error from "./404/error";

import PruebaFirestore from "./pruebaFirestore/pruebaFirestore";
const Router = () => {

  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/pokedex" element={<Listado />}></Route>
          <Route path="/play" element={<Play />}></Route>
          <Route path="/pokedex/:id" element={<Detail />}></Route>
          <Route path="/pruebaFirestore" element={<PruebaFirestore />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;