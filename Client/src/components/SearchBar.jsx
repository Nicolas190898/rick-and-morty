import { useState } from "react";
export default function SearchBar({ onSearch }) {
  const [id, setId] = useState('')
  const handleChange = (event) => {
    const value = event.target.value
    setId(value)
  }
  const randomChar = () => {
    const numRan = Math.floor(Math.random() * 825) + 1;
    onSearch(numRan)
  }
   return (
      <div>
          <input onChange={handleChange} value={id} type='search' />
       <button onClick={() => { onSearch(id); setId('') }}>Agregar</button> 
       <button onClick={randomChar}>Random</button>
      </div>
   );
}
