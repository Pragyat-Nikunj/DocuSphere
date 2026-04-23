"use client";

import { ReactNode } from "react";
import { ConvexProviderWithClerk } from 'convex/react-clerk';
import { ClerkProvider, SignIn, useAuth } from '@clerk/nextjs';
import { ConvexReactClient, Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { FullScreenLoader } from "./fullscreen-loader";
import { useAuthWithTemplate } from "@/hooks/use-auth";
const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}>
      <ConvexProviderWithClerk
        client={convex}
        useAuth={useAuthWithTemplate}
      >
        <Authenticated>
          {children}
        </Authenticated>
        <Unauthenticated>
          <div className="flex flex-col items-center justify-center">
            <SignIn routing="hash" />
          </div>
        </Unauthenticated>
        <AuthLoading>
          <FullScreenLoader label="Auth loading..." />
        </AuthLoading>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}