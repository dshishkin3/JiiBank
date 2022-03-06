import {
  collection,
  limit,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useMemo, useState } from "react";

import { db } from "../firebase";
import { useAuth } from "./useAuth";

export interface IProfile {
  _id: string;
  displayName: string;
  docId: string;
  operations: any[];
}

export interface IOperation {
  name: string;
  sum: string;
  timestamp: string;
}

export const useProfile = () => {
  const { user } = useAuth();

  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState<IProfile>({} as IProfile);
  const [name, setName] = useState("");
  const [operations, setOperations] = useState<IOperation[]>([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "users"), where("_id", "==", user?.uid), limit(1)),
        (spanshot) => {
          const profile = spanshot.docs.map((d) => ({
            ...(d.data() as Omit<IProfile, "docId">),
            docId: d.id,
          }))[0];

          setProfile(profile);
          setName(profile.displayName);
          setOperations(profile.operations);
          setIsLoading(false);
        }
      ),
    []
  );

  const value = useMemo(
    () => ({
      profile,
      isLoading,
      name,
      setName,
      operations,
    }),
    [profile, isLoading, name, operations]
  );

  return value;
};
