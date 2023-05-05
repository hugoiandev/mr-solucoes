import { Image } from "react-bootstrap";
import styles from "./header.module.css";
import Logo from "../../assets/logos/mr-logo-black.svg";
import Button from "../button";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import CloseIcon from "../../assets/icons/close.svg";
import OpenIcon from "../../assets/icons/burger.svg";

const Header = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  const isMobile = useMediaQuery({ query: "(max-width: 1319px)" });

  const onOpen = () => {
    setOpen((state) => !state);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoBox}>
        <Image src={Logo} className={styles.navLogo} />
      </div>
      {isMobile ? (
        <div>
          <div onClick={onOpen} className={styles.burger}>
            <Image width={40} src={open ? CloseIcon : OpenIcon} />
          </div>
        </div>
      ) : (
        <nav className={styles.nav}>
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
      )}
      {isMobile && (
        <nav
          className={`${styles.menuMobile} ${
            open ? styles.menuMobileOpened : styles.menuMobileClosed
          }`}
        >
          <div>
            <ul className={styles.navMobileLinks}>
              <li>VANTAGENS</li>
              <li>COMO OBTER</li>
              <li>FAQ</li>
              <li>
                <Button size="small" textSize={0.9} text="ANTECIPE AGORA" />
              </li>
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
