import { NextRequest, NextResponse } from "next/server";

export function GET (request:NextRequest){
    return NextResponse.json([
        {id:1, name: 'Milk',price:100},
        {id:2, name: 'Peter'},
    ])
}