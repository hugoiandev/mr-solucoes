import styles from "./button.module.css";
import { Image } from "react-bootstrap";
import WhatsAppIcon from "../../assets/icons/whatsaap.svg";

interface ButtonProps {
  text: string;
  icon?: boolean;
  color?: string;
  bgColor?: string;
}

const Button = ({
  text,
  icon = true,
  color = "white",
  bgColor = "#F49D2C",
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={styles.button}
      style={{ color, backgroundColor: bgColor }}
    >
      {icon && (
        <div className="me-2">
          <Image width={30} src={WhatsAppIcon} />
        </div>
      )}
      <p className={styles.buttonText}>{text}</p>
    </button>
  );
};

export default Button;
