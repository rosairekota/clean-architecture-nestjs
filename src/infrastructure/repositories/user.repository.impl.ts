import { IUserRepository } from "../../domain/repositories/user.repository";
import { UserEntity } from "../../domain/entities/user.entity";
import { Injectable } from "@nestjs/common";
import { UserStorage } from "../storage/user.storage";

@Injectable()
export class UserRepositoryImpl extends IUserRepository {
    constructor(private readonly userStorage: UserStorage) { 
        super();
    }
    findById(id: string): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }
    findAll(): Promise<UserEntity[]> {
        return this.userStorage.findAll();
    }
    create(entity: UserEntity): Promise<UserEntity> {
        return this.userStorage.create(entity);
    }
    update(entity: UserEntity): Promise<UserEntity> {
        return this.userStorage.update(entity);
    }
    delete(entity: UserEntity): Promise<UserEntity> {
        return this.userStorage.delete(entity);
    }
}