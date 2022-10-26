export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const PostDefaultState = {
  userId: 0,
  id: 0,
  title: "",
  body: ""
};
