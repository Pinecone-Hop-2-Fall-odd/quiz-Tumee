import "@/styles/globals.css";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";

export const UserDataContext = createContext({});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [token, setToken] = useState(false);

  const checkToken = () => {
    if (window) {
      const localToken = localStorage.getItem("token");

      if (localToken === null) {
        router.push("/login");
      } else {
        setToken(localToken);
      }
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <UserDataContext.Provider value={{ token }}>
      <Component {...pageProps} />
    </UserDataContext.Provider>
  );
}
