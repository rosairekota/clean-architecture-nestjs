import { Injectable } from "@nestjs/common";
import { IUserRepository } from "src/domain/repositories/user.repository";
import { CreateUserDto } from "src/presentation/users/dto/create-user.dto";
import { UserMapper } from "../mappers/user.mapper";

@Injectable()
export class CreateUserCase {
    constructor(private readonly userRepository: IUserRepository) { }

    async execute(createUserDto: CreateUserDto) {
        const user = UserMapper.toEntity(createUserDto);
        return this.userRepository.create(user);
    }
}