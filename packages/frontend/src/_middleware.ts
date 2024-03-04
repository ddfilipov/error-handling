import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    try {
        return NextResponse.next();
    } catch (error) {
        console.error("Middleware error: ", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}
