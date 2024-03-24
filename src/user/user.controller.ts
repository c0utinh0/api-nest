import { Body, Controller, Get, Param, Post, Put, Patch, Delete, ParseIntPipe } from "@nestjs/common"
import { CreateUserDto } from "./dto/create.user.dto"
import { UpdateUserDto } from "./dto/update.user.dto"
import { PatchUserDto } from "./dto/patch.user.dto"
import { UserService } from "./user.service"

@Controller('users')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Post()
    async create(@Body() data: CreateUserDto) {
        return this.userService.create(data);
    }

    @Get()
    async readAll() {
        return this.userService.readAll();
    }

    @Get(':id')
    async read(@Param('id', ParseIntPipe) id:  number) {
        return this.userService.read(id);
    }

    @Put(':id')
    async update(@Body() data: UpdateUserDto, @Param('id', ParseIntPipe) id:  number) {
        return this.userService.update(id, data); 
    }

    @Patch(':id')
    async patch(@Body() data: PatchUserDto, @Param('id', ParseIntPipe) id: number) {
        return this.userService.patch(id, data);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) { //Tranforma o param em int
        return {
            id
        }
    }


}