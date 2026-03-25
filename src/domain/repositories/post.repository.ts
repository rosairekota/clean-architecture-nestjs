import { DomainRepository } from "./user.repository";
import { PostEntity } from "../entities/post.entity";

export interface IPostRepository extends DomainRepository<PostEntity> {
    findAll(): Promise<PostEntity[]>;
    create(entity: PostEntity): Promise<PostEntity>;
    update(entity: PostEntity): Promise<PostEntity>;
    delete(entity: PostEntity): Promise<PostEntity>;
}