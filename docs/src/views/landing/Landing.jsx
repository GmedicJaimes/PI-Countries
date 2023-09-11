import { Link } from "react-router-dom";
import style from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={style.containerPrincipal}>
      <section className={style.containerOne}>
        <h1 className={style.first}>Bienvenido a: </h1>
        <h1 className={style.second}>NationData</h1>

        <h3 className={style.three}>
          Descubre datos actualizados y relevantes en <span>NationData</span>{" "}
          ,tu fuente confiable para conocer la realidad de los países.
        </h3>
      </section>

      <section className={style.containerTwo}>
        <div className={style.containerImage}>
          <img src="../src/assets/fondo3.jpg" alt="" />
          {/* <img src="../src/assets/fondo2.jpg" alt="" />
            <img src="../src/assets/fondo1.jpg" alt="" /> */}
        </div>
        <Link to="/home">
          <button className={style.buttonStart}>Enter</button>
        </Link>
      </section>
    </div>
  );
};

export default Landing;
