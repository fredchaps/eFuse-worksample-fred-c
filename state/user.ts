import create from "zustand";

export type User = {
  username: string;
  avatar: string;
};

type UserStore = {
  user: User;
};

const useUserStore = create<UserStore>((set) => ({
  user: {
    username: "Zagreus",
    avatar:
      "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/6c/6cb860275c519d372b098a0ad3b4143cf48ce6d3_full.jpg",
  },
}));

export default useUserStore;
