import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

export function GET (request:NextRequest){
    return NextResponse.json([
        {id:1, name: 'Carol'},
        {id:2, name: 'Peter'},
    ])
}

export async function POST(request:NextRequest){
    const body = await request.json()

    // 若無效資料
    const validation = schema.safeParse(body)
    if(!validation.success)
        return NextResponse.json(validation.error.errors, {status:400})

    //若已存在資料
    const exist_user = await prisma.user.findUnique({
        where:{email:body.email}
    })
    if(exist_user) 
        return NextResponse.json({error:'已註冊過'}, {status:400})

    //儲存資料
    const user = await prisma.user.create({
        data:{
            name:body.name,
            email:body.email
        }
    })
    return NextResponse.json(user, {status:201})
}

