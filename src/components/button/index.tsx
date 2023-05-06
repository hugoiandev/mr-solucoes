import styles from "./button.module.css";
import { Image } from "react-bootstrap";
import WhatsAppIcon from "../../assets/icons/whatsaap.svg";

interface ButtonProps {
  text: string;
  icon?: boolean;
  color?: string;
  bgColor?: string;
  size?: "small" | "medium" | "large";
  iconSize?: number;
  textSize?: number;
  href?: string;
}

const Button = ({
  text,
  icon = true,
  color = "white",
  bgColor = "#F49D2C",
  size = "large",
  iconSize = 30,
  textSize = 1,
  href,
}: ButtonProps): JSX.Element => {
  const checkButtonSize = (size: "small" | "medium" | "large") => {
    let selectedSize: string;

    switch (size) {
      case "small":
        selectedSize = styles.smallButton;
        break;
      case "medium":
        selectedSize = styles.mediumButton;
        break;
      default:
        selectedSize = styles.largeButton;
    }

    return selectedSize;
  };

  return (
    <a href={href} target="_BLANK" rel="noreferrer">
      <button
        className={checkButtonSize(size)}
        style={{ color, backgroundColor: bgColor }}
      >
        {icon && (
          <div className="me-2">
            <Image width={iconSize} src={WhatsAppIcon} />
          </div>
        )}
        <p style={{ fontSize: `${textSize}rem` }} className={styles.buttonText}>
          {text}
        </p>
      </button>
    </a>
  );
};

export default Button;
