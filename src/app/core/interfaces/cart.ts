import { Post } from './post';

export interface Cart {
  itemCount: number;
  totalAmount: number;
  posts: Post[];
}
