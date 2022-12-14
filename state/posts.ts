import create from "zustand";
import produce from "immer";
import { User } from "./user";

let POST_ID = 0;

// This is fine for local state. Posts would be coming from the BE and would have id's set there
export const getId = () => {
  POST_ID += 1;
  return POST_ID;
};

type SubmittedContent = {
  text: string;
  user: User;
  createdAt: Date;
  shares: number;
  hypes: number;
  id: string;
};

export interface Comment extends SubmittedContent {
  replies: Comment[];
}

export interface Post extends SubmittedContent {
  comments: Comment[];
  views: number;
}

type PostsState = {
  posts: Post[];
  submitPost: (newPost) => void;
  submitComment: (id, newComment) => void;
  getPostHype: (id) => void; // sets hype, doesn't 'get' hype.
  getCommentHype: (postId, commentId) => void;
};

export const createNewContent = (text, user) => ({
  text: text,
  user: user,
  createdAt: new Date(),
  views: 1,
  shares: 0,
  comments: [],
  hypes: 0,
  id: getId(),
});

const usePostsStore = create<PostsState>((set) => ({
  posts: [],
  submitPost: (newPost) =>
    set((state) => ({ posts: [newPost, ...state.posts] })),
  submitComment: (id, newComment) =>
    set(
      produce((state) => {
        const foundPost = state.posts.find((post) => post.id === id);
        if (foundPost) {
          foundPost.comments.push(newComment);
        }
      })
    ),
  getPostHype: (id) =>
    set(
      produce((state) => {
        const foundPost = state.posts.find((post) => post.id === id);
        if (foundPost) {
          foundPost.hypes += 1;
        }
      })
    ),
  getCommentHype: (postId, commentId) =>
    set(
      produce((state) => {
        // This is a little messy...
        const foundPost = state.posts.find((post) => post.id === postId);
        const foundComment = foundPost.comments.find(
          (comment) => comment.id === commentId
        );
        if (foundComment) {
          foundComment.hypes += 1;
        }
      })
    ),
}));

export default usePostsStore;
