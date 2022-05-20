import List from "./components/List";
import { useSelector} from "react-redux";


function App() {
  const {list} = useSelector(state => state.pokemon)
  return (
    <div className="App">
      <h2>PokeApi</h2>

        <List items={list}/>
    </div>
  );
}

export default App;
