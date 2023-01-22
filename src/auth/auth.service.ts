import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable({})
export class AuthService{
    constructor(private prisma: PrismaService){}

    signup(){
        return {msg: "Hello Signup"}
    }


    signin(){
        return {msg: "Hello Signin"}
    }
}