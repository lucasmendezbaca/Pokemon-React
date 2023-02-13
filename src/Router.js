import { BrowserRouter, Routes, Route } from "react-router-dom";
import Listado from "./listado/listado";
import Detail from "./detail/detail";
import Home from "./home/home";
import Play from "./play/play";
import Navigation from "./navigation/navigation";
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
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;