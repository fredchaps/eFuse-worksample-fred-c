import styles from "styles/Home.module.css";
import classnames from "classnames";
import capitalize from "lodash.capitalize";
import postStyles from "../PostCard/postStyles.module.css";
import usePostsStore, { Post } from "../../state/posts";
import Comments from "public/Comments.svg";
import Hypes from "public/Hypes.svg";
import Shares from "public/Shares.svg";
import { useState } from "react";
import { poppins } from "../../shared/fonts";

type Props = Pick<Post, "comments" | "hypes" | "shares" | "views" | "id">;

const Icon = ({ type, classNames }) => {
  switch (type) {
    case "comments":
      return <Comments className={classNames} />;
    case "hypes":
      return <Hypes className={classNames} />;
    case "shares":
      return <Shares className={classNames} />;
    default:
      return null;
  }
};

const Reaction = ({ type, count, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleMouseDown = () => {
    console.log("down");
    setIsClicked(true);
  };
  const handleMouseUp = () => {
    console.log("up");
    setIsClicked(false);
  };
  return (
    <button
      onClick={onClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className={classnames(postStyles.reactionWrapper, styles.flexRow, {
        [postStyles.soHotRightNowIcon]: type === "hypes" && count > 100,
        [postStyles.hover]: !isClicked,
        [postStyles.clicked]: isClicked,
      })}
    >
      {type !== "views" && (
        <div
          className={classnames(
            classnames(postStyles[type], postStyles.reactionIcon)
          )}
        >
          <Icon type={type} classNames={classnames()} />
        </div>
      )}
      <div
        className={classnames(styles.textBold, poppins.className, {
          [postStyles.soHotRightNow]: type === "hypes" && count > 100,
        })}
      >
        &nbsp;{count}
      </div>
      <div className={postStyles.reactionTypeText}>
        &nbsp;{capitalize(type)}
      </div>
    </button>
  );
};

const InteractionBar: React.FC<Props> = ({
  hypes,
  comments,
  shares,
  views,
  id,
}) => {
  const getHype = usePostsStore((state) => state.getHype);
  return (
    <div className={styles.flexRow}>
      <Reaction count={hypes} type="hypes" onClick={() => getHype(id)} />
      <Reaction count={comments?.length} type="comments" onClick={() => {}} />
      <Reaction count={shares} type="shares" onClick={() => {}} />
      <Reaction count={views} type="views" onClick={() => {}} />
    </div>
  );
};

export default InteractionBar;
