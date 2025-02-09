import { NextResponse } from "next/server";

export async function GET(req: Request) {
	return NextResponse.json({
		code: 200,
		message: "API is online.",
	});
}
