import classnames from "classnames";
import { ChangeEvent } from "react";
import { poppins } from "../../shared/fonts";
import inputStyles from "./inputStyles.module.css";

type Props = {
  onChange: (string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  placeholder: string;
  value: string;
  classNames?: string;
};

const Input: React.FC<Props> = ({
  onChange,
  onFocus,
  onBlur,
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
      onFocus={onFocus}
      onBlur={onBlur}
      value={value}
    />
  );
};

export default Input;
