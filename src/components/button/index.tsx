import styles from "./button.module.css";

interface ButtonProps {
  text: string;
  icon?: JSX.Element;
  color?: string;
  bgColor?: string;
}

const Button = ({
  text,
  icon,
  color = "white",
  bgColor = "#F49D2C",
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={styles.button}
      style={{ color, backgroundColor: bgColor }}
    >
      {icon && icon}
      {text}
    </button>
  );
};

export default Button;
