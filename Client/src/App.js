import './App.css';
import Cards from './components/Cards.jsx';
import { useState , useEffect } from 'react';
import Nav from './components/Nav';
import axios from 'axios';
import { Routes, Route , useLocation , useNavigate } from 'react-router-dom'
import Detail from './components/Detail';
import Favorites from './components/Favorites';
import About from './components/About';
import Error from './components/Error';
import Form from './components/Forms/Form';
function App() {
  const [characters, setCharacters] = useState([])
  const [access, setAccess] = useState(false);
  const EMAIL = "nicolascalvi717@gmail.com";
  const PASSWORD = "nico123";
  const navigate = useNavigate();
  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  }
  function logout() {
    setAccess(false);
    //navigate("/");
  }
  useEffect(() => {
    !access && navigate("/");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [access]);
 const onSearch =(id) => {
   axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
     ({ data }) => {
       if (data.name) {
         const char = characters.find((ch) => ch.id === +id);
         if (char) return alert("El personaje ya existe");
         setCharacters((oldChars) => [...oldChars, data]);
       } else {
         window.alert("¡No hay personajes con este ID!");
       }
     }
   );
  }
  const onClose = (id) => {
    const charactersFiltered = characters.filter(character => character.id !== +id)
    setCharacters(charactersFiltered)
  }
  const location = useLocation()
  return (
    <div className="App">
      {location.pathname !== "/" && <Nav onSearch={onSearch} logout={logout} />}
      <Routes>
        <Route path="/" element={<Form  login={login} />}></Route>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error />} />
        <Route path='/favorites' element={<Favorites/>}/>
      </Routes>
    </div>
  );
}

export default App;
