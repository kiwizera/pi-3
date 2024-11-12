import AuthService from "@/modules/auth/services/auth-service";
import { NextResponse } from "next/server";

export function GET(req) {
    AuthService.destroySession();

    return NextResponse.redirect(new URL('/login', req.url));
}