import { ReactNode } from "react";
import buttonStyles from "./button.module.css";

type Props = {
  children: ReactNode;
  onClick: (e) => void;
};

const Button: React.FC<Props> = ({ children, onClick }) => (
  <button className={buttonStyles.button} onClick={onClick}>
    {children}
  </button>
);

export default Button;
