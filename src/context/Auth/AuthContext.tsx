import { createContext } from "react";

interface AuthContextState {
  token: string | null;
  userId: string | null;
  roles: string[] | null;
  signIn(credentials: UserCredentials): Promise<void>;
  singout: () => void;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);
export { AuthContext };
