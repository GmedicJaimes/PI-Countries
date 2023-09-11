import style from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = ({ handleChange, handleSubmit }) => {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <img
          src="https://cdn.icon-icons.com/icons2/1091/PNG/512/worldmap_78386.png"
          alt=""
        />
        <h1>NationData</h1>
      </div>
      <div className={style.search}>
        <input
          type="text"
          placeholder="Search Country"
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>
          Search
        </button>
      </div>

      <div className={style.buttons}>
        <Link to="/create">
          <button>Create</button>
        </Link>

        <Link to="/">
          <button>Exit</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
