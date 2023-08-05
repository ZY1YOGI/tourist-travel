import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const cookie = request.cookies.get("token")?.value;
  console.log(cookie);
  
  // if (cookie === undefined) {
  //   const url = request.nextUrl.clone();
  //   url.pathname = "/login";
  //   return NextResponse.redirect(url, request);
  // }
}

export const config = {
  matcher: "/",
};