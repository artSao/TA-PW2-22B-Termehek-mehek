import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

// Define protected routes
const isProtectedRoute = createRouteMatcher(['/dashboard(.*)', '/forum(.*)']);

// Define public API routes
const isPublicApiRoute = createRouteMatcher(['/api/:path*']);

export default clerkMiddleware(async (auth, req) => {
  const { userId, redirectToSignIn } = await auth();

  // Allow access to public API routes
  if (isPublicApiRoute(req)) {
    return NextResponse.next(); // Allow the request to proceed
  }

  // Redirect to sign-in for protected routes if user is not authenticated
  if (!userId && isProtectedRoute(req)) {
    // Add custom logic to run before redirecting
    return redirectToSignIn();
  }

  // Allow access to other routes
  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"
  ],
};