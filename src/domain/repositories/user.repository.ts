import { UserEntity } from "../entities/user.entity";

export abstract class DomainRepository<T> {
    abstract findAll(): Promise<T[]>;
    abstract create(entity: T): Promise<T>;
    abstract update(entity: T): Promise<T>;
    abstract delete(entity: T): Promise<T>;
    abstract findById(id: string): Promise<T>;
}


export abstract class IUserRepository extends DomainRepository<UserEntity> {
    abstract findAll(): Promise<UserEntity[]>;
    abstract create(entity: UserEntity): Promise<UserEntity>;
    abstract update(entity: UserEntity): Promise<UserEntity>;
    abstract delete(entity: UserEntity): Promise<UserEntity>;
    abstract findById(id: string): Promise<UserEntity>;
}