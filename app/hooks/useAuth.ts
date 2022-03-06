import { useContext } from "react";
import { AuthContext } from "../providers/authProvider/AuthProvider";

export const useAuth = () => useContext(AuthContext);
