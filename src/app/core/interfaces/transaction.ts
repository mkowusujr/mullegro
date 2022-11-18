import { IPost } from './post';

export interface ITransaction {
  id: number;
  totalAmount: number;
  itemCount: number;
  posts: IPost[];
  createdAt: Date;
}
