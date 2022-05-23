import Home from "./pages/Home";
import Detail from "./pages/Detail";

import {Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {


    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/:idPokemon" element={<Detail/>}/>
            </Routes>

        </div>
    );
}

export default App;
