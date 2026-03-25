import { UserEntity } from "./user.entity";

export class PostEntity {
    id: string;
    title: string;
    content: string;
    author: UserEntity;
    constructor(id: string, title: string, content: string, author: UserEntity) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.author = author;
    }
}
