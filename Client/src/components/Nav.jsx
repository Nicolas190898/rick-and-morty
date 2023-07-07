import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
const Nav = ({onSearch , logout}) => {
  return (
    <nav>
      <SearchBar onSearch={onSearch} />
      <Link to={"/about"}>
        <button>About</button>
      </Link>
      <Link to={"/home"}>
        <button>Home</button>
      </Link>
      <Link to={"/favorites"}>
        <button>Favorites</button>
      </Link>
      <button onClick={logout}>Log out</button>
    </nav>
  );
}


export default Nav;