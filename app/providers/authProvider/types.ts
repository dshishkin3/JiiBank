import { User } from "firebase/auth";

export interface IContext {
  user: User | null;
  users: User[] | null;
  isLoading: boolean;
  register: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}
