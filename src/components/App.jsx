import "./App.css"
import Navbar from "./Navbar/Navbar";
import CartWidget from "./CartWidget/CartWidget";
import ItemListContainer from "./ItemListContainer/itemListContainer";
import { ItemCount } from "./ItemCount/ItemCount";

const App = () => {
  return (
    <>
      <Navbar/>
      <ItemCount ValorInicial={1} Stock={15}/>
      <ItemListContainer contadorDelItem={0}/>
    </>
  );
}

export default App;
