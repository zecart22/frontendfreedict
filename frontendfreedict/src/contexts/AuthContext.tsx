import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { api } from "../services";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthState {
  accessToken: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface SignUpCredentials {
  name: string;
  email: string;
  password: string;
}

interface AuthContextData {
  accessToken: string;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  singnUp: (credentials: SignUpCredentials) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used whitin an AuthProvider");
  }
  return context;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [data, setData] = useState<AuthState>(() => {
    const accessToken = localStorage.getItem("@MySimpleRestaurant:accessToken");

    if (accessToken) {
      return { accessToken };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const response = await api.post("/login", { email, password });

    const { accessToken } = response.data;
    localStorage.setItem("@FreeDict:accessToken", accessToken);
    window.localStorage.setItem("@AcessToken", response.data.token);
    window.localStorage.setItem("@AcessUserID", response.data.id);
    window.localStorage.setItem("@AcessUserEmail", response.data.email);

    setData({ accessToken });
  }, []);

  const singnUp = useCallback(
    async ({ email, password, name }: SignUpCredentials) => {
      const response = await api.post("/users", { email, password, name });
    },
    []
  );

  const signOut = useCallback(() => {
    window.localStorage.clear();

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        accessToken: data.accessToken,
        signIn,
        signOut,
        singnUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
