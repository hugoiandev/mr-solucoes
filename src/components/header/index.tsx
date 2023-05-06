import { Image } from "react-bootstrap";
import styles from "./header.module.css";
import Logo from "../../assets/logos/mr-logo-black.svg";
import Button from "../button";
import { useMediaQuery } from "react-responsive";
import { useState, useRef } from "react";
import CloseIcon from "../../assets/icons/close.svg";
import OpenIcon from "../../assets/icons/burger.svg";

const Header = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const [fixed, setFixed] = useState<boolean>(false);

  const headerElement = useRef<HTMLElement>(null);

  const isMobile = useMediaQuery({ query: "(max-width: 1319px)" });

  window.addEventListener("scroll", () => {
    if (headerElement.current?.clientHeight) {
      if (window.scrollY > headerElement.current?.clientHeight) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    }
  });

  const onOpen = () => {
    setOpen((state) => !state);
  };

  return (
    <header
      ref={headerElement}
      className={`${styles.header} ${fixed ? styles.fixedHeader : ""}`}
    >
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
              <li>
                <a href="#advantages">VANTAGENS</a>
              </li>
              <li>
                <a href="#requirements">COMO OBTER</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <Button
                  href="https://api.whatsapp.com/send?phone=5519982766681&text=Ol%C3%A1%20gostaria%20de%20fazer%20uma%20simula%C3%A7%C3%A3o%20do%20Saque%20FGTS!"
                  text="ANTECIPE AGORA"
                />
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
              <li>
                <a href="#advantages">VANTAGENS</a>
              </li>
              <li>
                <a href="#requirements">COMO OBTER</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <Button
                  href="https://api.whatsapp.com/send?phone=5519982766681&text=Ol%C3%A1%20gostaria%20de%20fazer%20uma%20simula%C3%A7%C3%A3o%20do%20Saque%20FGTS!"
                  size="small"
                  textSize={0.9}
                  text="ANTECIPE AGORA"
                />
              </li>
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
