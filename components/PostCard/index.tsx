import Card from "../Card";
import { CommentInput } from "../Inputs";
import InteractionBar from "../InteractionBar";
import UserHeader from "../UserHeader";

const PostCard = ({ post }) => {
  return (
    <Card size="large">
      <UserHeader />
      <div>{post.text}</div>
      <InteractionBar />
      <CommentInput />
    </Card>
  );
};

export default PostCard;
