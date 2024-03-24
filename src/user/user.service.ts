import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDto } from "./dto/create.user.dto";

@Injectable()
export class UserService {
    
    constructor(private readonly prisma: PrismaService) {}

    async create({name, email, password}: CreateUserDto){
        return await this.prisma.user.create({
            data: {
                name,
                email,
                password,
            },
        });
    }

    async readAll(){
        return await this.prisma.user.findMany();
    }

    async read(id: number){
        return await this.prisma.user.findUnique({
            where: {
                id
            }
        });
    };
}