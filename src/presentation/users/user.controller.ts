import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { GetAllUsersCase } from "src/application/use-cases/get-all-users-case";
import { CreateUserCase } from "src/application/use-cases/create-user-case";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Controller('users')
export class UserController {
    constructor(
        private readonly getAllUsersCase: GetAllUsersCase,
        private readonly createUserCase: CreateUserCase,
    ) { }

    @Get()
    findAll() {
        return this.getAllUsersCase.execute();
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.createUserCase.execute(createUserDto);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return { id, ...updateUserDto };
    }
}