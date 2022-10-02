import { Post } from './post';

export interface Transaction {
  id: number;
  totalAmount: number;
  itemCount: number;
  posts: Post[];
  createdAt: Date;
}
