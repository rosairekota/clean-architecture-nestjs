import { Injectable } from "@nestjs/common";
import { IUserRepository } from "src/domain/repositories/user.repository";
import { CreateUserDto } from "src/presentation/users/dto/create-user.dto";

@Injectable()
export class CreateUserCase {
    constructor(private readonly userRepository: IUserRepository) { }

    async execute(createUserDto: CreateUserDto) {
        return this.userRepository.create(createUserDto as any);
    }
}