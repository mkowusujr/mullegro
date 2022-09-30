import { Post } from "./post";
import { User } from "./user";

export interface SearchResults {
    foundUsers: User[];
    foundPosts: Post[];
}