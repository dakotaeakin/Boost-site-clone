// AuthGuard.tsx
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { UserContext } from "./context";
import { auth } from "./firebase";

export function AuthGuard({ children }) {
  // const { user, initializing, setRedirect } = auth();
  const context = useContext(UserContext);

  const router = useRouter();

  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (!loading) {
      //auth is initialized and there is no user
      if (!user) {
        // redirect
        router.push("/login");
      }
    }
  }, [router, user, loading]);

  // console.log(user);
  // if auth initialized with a valid user show protected page
  if (!loading && user) {
    return <>{children}</>;
  }

  /* otherwise don't return anything, will do a redirect from useEffect */
  return null;
}
