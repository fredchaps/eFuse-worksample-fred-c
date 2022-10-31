import classnames from "classnames";
import { ChangeEvent } from "react";
import { poppins } from "../../shared/fonts";
import inputStyles from "./inputStyles.module.css";

type Props = {
  onChange: (string) => void;
  placeholder: string;
  value: string;
  classNames: string;
};

const Input: React.FC<Props> = ({
  onChange,
  placeholder,
  value,
  classNames,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    onChange(e.target.value);

  return (
    <input
      onChange={handleChange}
      placeholder={placeholder}
      className={classnames(inputStyles.input, poppins.className, classNames)}
      value={value}
    />
  );
};

export default Input;
