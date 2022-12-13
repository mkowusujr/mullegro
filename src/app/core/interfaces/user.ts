export interface IUser {
  name: string;
  username: string;
  email: string;
  address: string;
  password?: string;
  bio?: string;
  profilePicture: string;
  createdAt?: Date;
}
