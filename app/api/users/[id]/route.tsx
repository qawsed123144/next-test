import prisma from "@/prisma/client"
import { NextRequest, NextResponse } from "next/server"

interface Props {
    params: { id: string }
}


export async function PUT(request: NextRequest, { params: { id } }: Props) {
    const body = await request.json()

    // 若無效資料
    if (!body.name)
        return NextResponse.json({ error: '必須填入名字' }, { status: 400 })

    // 若查無資料
    const user = await prisma.user.findUnique({
        where: { id: id }
    })
    if (!user)
        return NextResponse.json({ error: '找不到此用戶' }, { status: 404 })

    // 更新資料
    const newUser = await prisma.user.update({
        where: { id: id },
        data: {
            name: body.name,
            email: body.email
        }
    })
    return NextResponse.json(newUser)
}



export async function DELETE(request: NextRequest, { params: { id } }: Props) {
    // 若查無資料
    const user = await prisma.user.findUnique({
        where: { id: id }
    })
    if (!user)
        return NextResponse.json({ error: '找不到此用戶' }, { status: 404 })

    // 刪除資料
    const newUser = await prisma.user.delete({
        where: { id: id },
    })
    return NextResponse.json({message: '已刪除'})
}