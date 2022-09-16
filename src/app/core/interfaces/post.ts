export interface Post {
  id: number;
  title: string;
  price: number;
  description: string;
  condition: string;
  address: string;
  category: string;
  status: string;
  userId: number;
  display_picture?: string;
}
