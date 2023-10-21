import { Author } from "./author.model";
import { Tag } from "./tag.model";

export class BlogPage {
    blogid!: number;
    author!: Author;
    title!: string;
    subtitle!: string;
    thumbnail!: string;
    tags!: Tag[];

}
