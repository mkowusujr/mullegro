import { IPost } from './post';

export interface ICart {
  itemCount: number;
  totalAmount: number;
  posts: IPost[];
}
