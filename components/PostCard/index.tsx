import { Post } from "../../state/posts";
import postStyles from "./postStyles.module.css";
import Card from "../Card";
import { CommentInput } from "../Inputs";
import InteractionBar from "../InteractionBar";
import UserHeader from "../UserHeader";
import { useState } from "react";

type Props = {
  post: Post;
};

const PostCard: React.FC<Props> = ({ post }) => {
  const [newComment, setNewComment] = useState("");
  const { createdAt, text, hypes, comments, shares, views, id } = post;

  return (
    <Card size="large">
      <UserHeader size="large" postDate={createdAt} />
      <div className={postStyles.postContent}>{text}</div>
      <InteractionBar
        hypes={hypes}
        comments={comments}
        shares={shares}
        views={views}
        id={id}
      />
      <CommentInput onChange={setNewComment} value={newComment} />
    </Card>
  );
};

export default PostCard;
