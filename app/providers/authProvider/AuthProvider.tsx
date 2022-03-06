import { onAuthStateChanged, User } from "firebase/auth";
import { createContext, FC, useEffect, useMemo, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { Alert } from "react-native";

import { auth, login, logout, register, db } from "../../firebase";
import { IContext } from "./types";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[] | null>(null);
  const [isLoadingInitial, setIsLoadingInitial] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // register
  const registerHandler = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const { user } = await register(email, password);

      await addDoc(collection(db, "users"), {
        _id: user.uid,
        displayName: "no name",
        operations: {},
      });
    } catch (err: any) {
      Alert.alert(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // login
  const loginHandler = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      await login(email, password);
    } catch (err: any) {
      Alert.alert(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // logout
  const logoutHandler = async () => {
    setIsLoading(true);
    try {
      await logout();
    } catch (err: any) {
      Alert.alert(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // check user
  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        setUser(user || null);
        setIsLoadingInitial(false);
      }),
    []
  );

  const value = useMemo(
    () => ({
      user,
      users,
      isLoading,
      register: registerHandler,
      login: loginHandler,
      logout: logoutHandler,
    }),
    [user, isLoading]
  );

  return (
    <AuthContext.Provider value={value}>
      {!isLoadingInitial && children}
    </AuthContext.Provider>
  );
};
