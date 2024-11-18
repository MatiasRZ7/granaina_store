import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/:path*", "/api/public", "/api/public/*"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};