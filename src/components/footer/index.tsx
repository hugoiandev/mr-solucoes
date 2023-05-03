import { Image } from "react-bootstrap";
import styles from "./footer.module.css";
import MrLogo from "../../assets/logos/mr-logo.svg";

const Footer = () => {
  const date = new Date();

  return (
    <footer className={styles.footer}>
      <div className={styles.logoBox}>
        <Image src={MrLogo} className={styles.footerLogo} />
      </div>
      <div>
        <span>
          {`© ${date.getFullYear()}  - Todos os direitos reservados | MR Soluções Financeiras`}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
