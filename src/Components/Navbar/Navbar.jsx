// Estilos css
// import "./Navbar.module.css";

import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <img
        src="https://res.cloudinary.com/drxzxkzpf/image/upload/v1677177832/logo_qjszmo.svg"
        alt="Logo"
        style={{ width: "auto", height: "60%" }}
      />
      <ul className={styles.containerList}>
        <li>
          <a href="#" className={styles.containerList}>Productos</a>
        </li>
        <li>
          <a href="#" className={styles.containerList}>Nosotros</a>
        </li>
        <li>
          <a href="#" className={styles.containerList}>Contactanos</a>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
