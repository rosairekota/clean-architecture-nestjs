import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserRepositoryImpl } from "../../infrastructure/repositories/user.repository.impl";
import { UserStorage } from "../../infrastructure/storage/user.storage";
import { GetAllUsersCase } from "src/application/use-cases/get-all-users-case";
import { CreateUserCase } from "src/application/use-cases/create-user-case";
import { IUserRepository } from "src/domain/repositories/user.repository";

@Module({
    imports: [],
    controllers: [UserController],
    providers: [
        UserStorage,
        GetAllUsersCase,
        CreateUserCase,
        { provide: IUserRepository, useClass: UserRepositoryImpl },
    ],
    exports: [UserStorage, GetAllUsersCase, CreateUserCase, IUserRepository],
})
export class UserModule { }