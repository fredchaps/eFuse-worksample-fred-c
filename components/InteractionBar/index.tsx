import styles from "styles/Home.module.css";
import classnames from "classnames";
import capitalize from "lodash.capitalize";
import postStyles from "../PostCard/postStyles.module.css";
import usePostsStore, { Comment } from "../../state/posts";
import Comments from "public/Comments.svg";
import Hypes from "public/Hypes.svg";
import Shares from "public/Shares.svg";
import { useState } from "react";
import { poppins } from "../../shared/fonts";

type Props = {
  hypes: number;
  comments?: Comment[];
  replies?: Comment[];
  shares: number;
  views?: number;
  postId: string;
  commentId?: string;
};

const Icon = ({ type, classNames }) => {
  switch (type) {
    case "replies":
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
    setIsClicked(true);
  };

  const handleMouseUp = () => {
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
      data-testid={`${type}-button`}
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
        className={classnames(
          styles.textBold,
          poppins.className,
          postStyles.reactionCount,
          {
            [postStyles.soHotRightNow]: type === "hypes" && count > 100,
          }
        )}
        data-testid={`${type}-count`}
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
  replies,
  shares,
  views,
  postId,
  commentId,
}) => {
  const getPostHype = usePostsStore((state) => state.getPostHype);
  const getCommentHype = usePostsStore((state) => state.getCommentHype);

  const handleHypeClick = () => {
    if (!!comments) {
      getPostHype(postId);
    } else if (!!replies) {
      getCommentHype(postId, commentId);
    }
  };
  return (
    <div className={classnames(styles.flexRow, styles.overflow)}>
      <Reaction count={hypes} type="hypes" onClick={handleHypeClick} />
      {!!comments && (
        <Reaction count={comments?.length} type="comments" onClick={() => {}} />
      )}
      {!!replies && (
        <Reaction count={replies?.length} type="replies" onClick={() => {}} />
      )}
      <Reaction count={shares} type="shares" onClick={() => {}} />
      <Reaction count={views} type="views" onClick={() => {}} />
    </div>
  );
};

export default InteractionBar;
