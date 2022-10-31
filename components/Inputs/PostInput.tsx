import classnames from "classnames";
import { Poppins } from "@next/font/google";
import Input from "./Input";
import { useState } from "react";
import Camera from "public/Camera.svg";
import Video from "public/Video.svg";
import inputStyles from "./inputStyles.module.css";
import styles from "styles/Home.module.css";
import usePostsStore, { createNewContent } from "../../state/posts";
import Button from "../Button";

const poppins = Poppins({ weight: "500" });

const DummyElement = ({ type }) => (
  <div
    className={classnames(
      inputStyles.dummyBlocks,
      styles.textBold,
      poppins.className
    )}
  >
    {type === "Camera" ? <Camera /> : <Video />}
    <span className={inputStyles.marginLeft}>
      {type === "Camera" ? "Add Media" : "Go Live"}
    </span>
  </div>
);

const PostInput: React.FC = () => {
  const [newPostValue, setNewPostValue] = useState("");
  const submitPost = usePostsStore((state) => state.submitPost);

  const onPostSubmit = (e) => {
    e.preventDefault();

    if (newPostValue.length < 1) return null;

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
      <div className={classnames(styles.flexRow, styles.justifyBetween)}>
        <div className={styles.flexRow}>
          <DummyElement type="Camera" />
          <DummyElement type="Video" />
        </div>
        <Button onClick={onPostSubmit} classNames={inputStyles.flexEnd}>
          Post
        </Button>
      </div>
    </form>
  );
};

export default PostInput;
