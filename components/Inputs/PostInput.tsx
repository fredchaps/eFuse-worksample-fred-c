import classnames from "classnames";
import Input from "./Input";
import { useState } from "react";
import Camera from "public/Camera.svg";
import Video from "public/Video.svg";
import inputStyles from "./inputStyles.module.css";
import styles from "styles/Home.module.css";
import usePostsStore, { createNewContent } from "../../state/posts";
import Button from "../Button";

const DummyElement = ({ type }) => (
  <div>
    {type === "Camera" ? <Camera /> : <Video />}
    <span>{type === "Camera" ? "Add Media" : "Go Live"}</span>
  </div>
);

const PostInput: React.FC = () => {
  const [newPostValue, setNewPostValue] = useState("");
  const submitPost = usePostsStore((state) => state.submitPost);
  // TODO: remove and move logic to PostInput
  const onPostSubmit = (e) => {
    e.preventDefault;
    const newPost = createNewContent(newPostValue, "A. Nonymous");
    submitPost(newPost);
    setNewPostValue("");
  };
  return (
    <form onSubmit={onPostSubmit}>
      <Input
        onChange={setNewPostValue}
        placeholder={"What's on your mind?"}
        value={newPostValue}
        classNames={classnames(inputStyles.post, styles.textBold)}
      />
      <div className={classnames(styles.flexRow)}>
        <DummyElement type="Camera" />
        <DummyElement type="Video" />
        <Button onClick={onPostSubmit}>Post</Button>
      </div>
    </form>
  );
};

export default PostInput;
