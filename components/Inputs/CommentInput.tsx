import Input from "./Input";
import inputStyles from "./inputStyles.module.css";

type Props = {
  onChange: () => void;
};

const CommentInput: React.FC<Props> = ({ onChange }) => {
  return <Input onChange={onChange} placeholder={"Add comment"} />;
};

export default CommentInput;
