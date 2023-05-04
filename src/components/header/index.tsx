import { Image } from "react-bootstrap";
import styles from "./header.module.css";
import Logo from "../../assets/logos/mr-logo-black.svg";
import Button from "../button";

const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logoBox}>
          <Image src={Logo} className={styles.navLogo} />
        </div>
        <div>
          <ul className={styles.navLinks}>
            <li>VANTAGENS</li>
            <li>COMO OBTER</li>
            <li>FAQ</li>
            <li>
              <Button text="ANTECIPE AGORA" />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
