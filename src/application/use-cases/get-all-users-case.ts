import { Injectable } from "@nestjs/common";
import { IUserRepository } from "src/domain/repositories/user.repository";

@Injectable()
export class GetAllUsersCase {
    constructor(private readonly userRepository: IUserRepository) { }

    async execute() {
        return this.userRepository.findAll();
    }
}