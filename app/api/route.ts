import { NextResponse } from 'next/server'

const data = {
    code: 200,
    message: 'API is online.',
}

export async function GET(req: Request) {
    return NextResponse.json(data)
}
