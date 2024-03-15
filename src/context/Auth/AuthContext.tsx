import{ createContext } from "react";


interface AuthContextState {
  token: string | null;
  signIn(credentials: UserCredentials): Promise<void>;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);
export { AuthContext };
