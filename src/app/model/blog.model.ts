import { Author } from "./author.model"

export class Blog {
    blogid!: number
    authorid!: Author
    title!: string
    subtitle!: string
    thumbnail!: string
}
