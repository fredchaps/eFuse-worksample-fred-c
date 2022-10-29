import create from "zustand";
import { User } from "./user";

type SubmittedContent = {
  text: string;
  user: User;
  createdAt: Date;
  shares: number;
  hypes: number;
};

interface Comment extends SubmittedContent {
  replies: number;
}

interface Post extends SubmittedContent {
  comments: Comment[];
  views: number;
}

type PostsState = {
  posts: Post[];
  submitPost: (newPost) => void;
  submitComment: (newComment) => void;
};

export const createNewContent = (text, user) => ({
  text: text,
  user: user,
  createdAt: new Date(),
  views: 1,
  shares: 0,
  comments: [],
  hypes: 0,
});

const usePostsStore = create<PostsState>((set) => ({
  posts: [],
  submitPost: (newPost) => set((state) => ({ posts: state.posts, ...newPost })),
  submitComment: (newComment) => set((state) => ({})),
}));

export default usePostsStore;
