export interface IPost {
  id?: number;
  title: string;
  price: number;
  description: string;
  condition: string;
  category: string;
  status?: string;
  userId?: number;
  display_picture?: string;
  createdAt?: Date;
}
