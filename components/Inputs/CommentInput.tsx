import Input from "./Input";
import Comments from "public/Comments.svg";
import Add from "public/Add.svg";
import inputStyles from "./inputStyles.module.css";
import { useState } from "react";
import classNames from "classnames";
import { poppins } from "../../shared/fonts";
import usePostsStore, { getId } from "../../state/posts";
import useUserStore from "../../state/user";

type Props = {
  id: string;
};

const CommentInput: React.FC<Props> = ({ id }) => {
  const submitComment = usePostsStore((state) => state.submitComment);
  const user = useUserStore((state) => state.user);
  const [newComment, setNewComment] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.length < 1) return null;
    submitComment(id, {
      user: user,
      text: newComment,
      createdAt: new Date(),
      hypes: 0,
      replies: [],
      shares: 0,
      id: getId(),
    });
    setNewComment("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={inputStyles.commentWrapper}>
        {!isFocused && <Comments className={inputStyles.commentIcon} />}
        <Input
          classNames={inputStyles.comment}
          onChange={setNewComment}
          placeholder={"Add comment"}
          value={newComment}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {!isFocused && <Add className={inputStyles.addIcon} />}
        {isFocused && (
          <button
            className={classNames(
              inputStyles.commentButton,
              poppins.className,
              {
                [inputStyles.commentButtonEnabled]: newComment.length > 0,
              }
            )}
            onClick={handleSubmit}
            data-testid="comment-button"
          >
            Post
          </button>
        )}
      </div>
    </form>
  );
};

export default CommentInput;
