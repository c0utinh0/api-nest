import { Body, Controller, Get, Param, Post, Put, Patch, Delete } from "@nestjs/common"
import { CreateUserDto } from "./dto/create.user.dto"
import { UpdateUserDto } from "./dto/update.user.dto"
import { PatchUserDto } from "./dto/patch.user.dto"

@Controller('users')
export class UserController {

    @Post()
    async create(@Body() body: CreateUserDto) {
        return { body }
    }

    @Get()
    async readAll() {
        return {user:[]}
    }

    @Get(':id')
    async read(@Param() param) {
        return {user:{}, param}
    }

    @Put(':id')
    async update(@Body() body: UpdateUserDto, @Param() params) {
        return {
            method: 'Put',
            body,
            params
        }
    }

    @Patch(':id')
    async patch(@Body() body: PatchUserDto, @Param() params) {
        return {
            method: 'patch',
            body,
            params
        }
    }

    @Delete(':id')
    async delete(@Param() params) {
        return {
            params
        }
    }


}