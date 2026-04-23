import { useAuth as useClerkAuth } from "@clerk/nextjs";

type GetToken = ReturnType<typeof useClerkAuth>["getToken"];
type GetTokenOptions = Parameters<GetToken>[0];

export function useAuthWithTemplate() {
  const auth = useClerkAuth();

  return {
    ...auth,
    getToken: async (opts?: GetTokenOptions) => {
      return auth.getToken({
        template: "convex",
        ...opts,
      });
    },
  };
}