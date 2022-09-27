import { Post } from "./post"

export interface Transaction {
    id: number,
    dateString: string,
    totalAmount: number,
    itemCount: number
    posts: Post[]
}