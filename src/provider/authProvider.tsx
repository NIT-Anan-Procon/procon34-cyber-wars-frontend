import { isAuthState } from "@/atoms";
import { useRecoilState } from "recoil";

type AuthProviderProps= {
  children: React.ReactNode;
}

export const AuthProvider= ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useRecoilState<boolean>(isAuthState);
  return (
    <>{children}</>
  )
}