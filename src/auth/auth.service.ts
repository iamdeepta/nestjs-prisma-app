import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";

@Injectable({})
export class AuthService{
    constructor(private prisma: PrismaService){}

    async signup(dto: AuthDto){

        try{

            const user = await this.prisma.user.create({
                data:{
                    name: dto.name,
                    email: dto.email,
                    password: dto.password
                }
            });

            delete user.password;

            return user;

        }catch(error){
            return error;
        }
        
    }


    signin(){
        return {msg: "Hello Signin"}
    }
}