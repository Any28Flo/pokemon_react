import { useEffect } from "react";
import List from "./components/List";
import { useSelector, useDispatch} from "react-redux";
import {pokemon} from "./redux/actions";


function App() {
  const dispatch = useDispatch();

  const {list} = useSelector(state => state.pokemon);

  useEffect(()=>{
    dispatch(pokemon.getPokemonAction());
  }, [dispatch])

  return (
    <div className="App">
      <h2>PokeApi</h2>

        <List items={list}/>
    </div>
  );
}

export default App;
