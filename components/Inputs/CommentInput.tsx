import Input from "./Input";
import Comments from "public/Comments.svg";
import Add from "public/Add.svg";
import inputStyles from "./inputStyles.module.css";
import { useState } from "react";
import classNames from "classnames";
import { poppins } from "../../shared/fonts";

type Props = {
  onChange: (value) => void;
  value: string;
};

const CommentInput: React.FC<Props> = ({ onChange, value }) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className={inputStyles.commentWrapper}>
      {!isFocused && <Comments className={inputStyles.commentIcon} />}
      <Input
        classNames={inputStyles.comment}
        onChange={onChange}
        placeholder={"Add comment"}
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {!isFocused && <Add className={inputStyles.addIcon} />}
      {isFocused && (
        <button
          className={classNames(inputStyles.commentButton, poppins.className, {
            [inputStyles.commentButtonEnabled]: value.length > 0,
          })}
        >
          Post
        </button>
      )}
    </div>
  );
};

export default CommentInput;
