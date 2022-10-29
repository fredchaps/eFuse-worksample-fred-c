import classnames from "classnames";
import { ChangeEvent } from "react";
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
      className={classnames(inputStyles.input, classNames)}
      value={value}
    />
  );
};

export default Input;
