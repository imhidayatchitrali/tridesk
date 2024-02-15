
export function middleware(request) {
  const { pathname } = request.nextUrl;

}

export const config = {
  matcher: ["/",],
};
