export interface Review {
  id: number;
  rating: number;
  description: string;
  createdAt: Date;
  userId: number;
  postId: number;
}
