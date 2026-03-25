import { CreateUserDto } from "../../presentation/users/dto/create-user.dto";
import { UserEntity } from "../../domain/entities/user.entity";

export class UserMapper {
    static toEntity(dto: CreateUserDto): UserEntity {
        return new UserEntity(
            dto.name,
            dto.email,
            dto.password
        );
    }
}
