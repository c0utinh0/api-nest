import { Body, Controller, Get, Param, Post } from "@nestjs/common"

@Controller('users')
export class UserController {

    @Post()
    async create(@Body() body) {
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
}