import {
  useEffect,
  useState,
  useContext,
  createContext,
  useCallback,
} from "react";
import { useRouter } from "next/router";
import Cookie from "js-cookie";

const authContext = createContext();

function useProvideAuth() {
  const cookie = Cookie.get("auth");
  const [isAuthed, setIsAuthed] = useState(cookie);
  const { pathname, push } = useRouter();

  const login = useCallback(() => setIsAuthed(true), []);
  const logout = useCallback(() => setIsAuthed(false), []);

  useEffect(() => {
    if (pathname === "/sign-up") {
      return Cookie.remove("auth");
    }

    if (!isAuthed) {
      push("/sign-in");
      Cookie.remove("auth");
    } else {
      Cookie.set("auth", true);
    }
  }, [isAuthed]);

  return { isAuthed, login, logout };
}

export const AuthProvider = ({ children }) => {
  const value = useProvideAuth();
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default function useAuth() {
  return useContext(authContext);
}
