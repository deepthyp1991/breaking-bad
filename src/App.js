import React, {useState, useEffect} from "react"
import './App.css';
import axios from "axios"
import { Header } from './components/ui/Header';
import { CharacterGrid } from "./components/characters/CharacterGrid";
import { Search } from "./components/ui/Search";


const App = () => {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState("")

   useEffect(() => {
    const fetchItems = async () => {
    const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);
    console.log(result)
    setItems(result.data);
    setLoading(false)
    }
    fetchItems()
   }, [query])

  return (
    <div className="container">
    <Header />
     <Search getQuery = {(q) => setQuery(q)} /><br />
    <CharacterGrid loading={loading} items ={items}/>
    </div>
  );
}

export default App;
