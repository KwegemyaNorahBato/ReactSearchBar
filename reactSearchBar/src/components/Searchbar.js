import React, {useState} from 'react';
import '../App';

function Search() {
    const [name, setinput] = useState({search:""})
  return (
    <form>
    <input type="text" id="bar" placeholder="search here"value={name.search} onChange={e => setinput({ ...name, search: e.target.value})}/>
    <h1>{name.search}</h1>

</form>
  );
}

export default Search;
