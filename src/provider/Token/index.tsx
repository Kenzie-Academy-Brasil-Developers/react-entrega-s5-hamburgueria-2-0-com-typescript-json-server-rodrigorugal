import { createContext, useState } from "react";
import { ChildrensProdivers } from "../../types";

interface ValueContextToken {
  token: string;
  addToken: (access: string) => void;
}

export const TokenContext = createContext<ValueContextToken>(
  {} as ValueContextToken
);

export const TokenProvider = ({ children }: ChildrensProdivers) => {
  const [token, setToken] = useState("");

  const addToken = (access: string) => {
    localStorage.setItem("@Hamburgueria:Token", JSON.stringify(access));
    setToken(access);
  };

  return (
    <TokenContext.Provider value={{ token, addToken }}>
      {children}
    </TokenContext.Provider>
  );
};
