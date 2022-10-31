import classnames from "classnames";
import { ReactNode } from "react";
import buttonStyles from "./button.module.css";

type Props = {
  children: ReactNode;
  onClick: (e) => void;
  classNames?: string;
};

const Button: React.FC<Props> = ({ children, classNames, onClick }) => (
  <button
    className={classnames(buttonStyles.button, classNames)}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
