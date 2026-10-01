import { getAcc } from "@/app/actions";
import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";
import { timingSafeEqual } from "crypto";

const secretKey = process.env.SECRET_KEY;

export async function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams;
	const key = searchParams.get("key");
	if (!key) {
		return NextResponse.json({ error: "No key provided" }, { status: 401 });
	}
	if (!secretKey || !safeCompare(key)) {
		return NextResponse.json({ error: "Invalid key" }, { status: 401 });
	}

	const data = await getAcc();
	return NextResponse.json(data);
}

function safeCompare(input: string) {
	const a = new TextEncoder().encode(input);
	const b = new TextEncoder().encode(secretKey);
	if (a.length !== b.length) return false;
	return timingSafeEqual(a, b);
}
