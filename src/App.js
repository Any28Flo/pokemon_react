import Home from "./pages/Home";
import Detail from "./pages/Detail";

import {Routes, Route} from "react-router-dom";

function App() {


    return (
        <div className="App">
            <h2>PokeApi</h2>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/:idPokemon" element={<Detail/>}/>
            </Routes>

        </div>
    );
}

export default App;
