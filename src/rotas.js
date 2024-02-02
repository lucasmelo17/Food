import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/home.jsx";
import Checkout from "./pages/checkout/checkout.jsx";
import Historico from "./pages/historico/historico.jsx";

function Rotas(){
    return <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/checkout" element={<Checkout/>}></Route>
                <Route path="/historico" element={<Historico/>}></Route>
            </Routes>
    </BrowserRouter>
}

export default Rotas;