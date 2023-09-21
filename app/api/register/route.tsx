import prisma from "@/prisma/client";
import { data } from "autoprefixer";
import bcrypt from 'bcrypt'
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
    email:z.string().email(),
    password:z.string().min(5)
})

export async function POST(request:NextRequest){
    const body = await request.json()

    const exist_user = await prisma.user.findUnique({where:{email:body.email}})
    if(exist_user) return NextResponse.json({error:"已註冊過"}, {status:400})

    const validation = schema.safeParse(body)
    if(!validation.success) return NextResponse.json(validation.error.errors,{status:400})

    const hashedPass = await bcrypt.hash(body.password, 10)
    const newUser = await prisma.user.create({data:{email:body.email, hashedPass:hashedPass}})

    return NextResponse.json({message:newUser.email + "已完成註冊"}, {status:200})

}