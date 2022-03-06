import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";

import { useAuth } from "./useAuth";
import { IContact } from "../components/screens/home/sendAgain/types";
import { IProfile } from "./useProfile";

export const useContacts = () => {
  const { user } = useAuth();

  const [contacts, setContacts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "cards"), where("userId", "!=", user?.uid)),
        async (snapshot) => {
          setIsLoading(true);
          const contactsFire = await Promise.all(
            snapshot.docs.map(async (d) => {
              const data = d.data() as IContact & {
                userId: string;
              };

              let displayName = "";

              const q = query(
                collection(db, "users"),
                where("_id", "==", data.userId)
              );
              const querySnapshot = await getDocs(q);

              querySnapshot.forEach((doc) => {
                displayName = (doc.data() as IProfile).displayName;
              });

              return {
                ...data,
                _id: d.id,
                displayName,
              };
            })
          );
          setContacts(contactsFire);
          setIsLoading(false);
        }
      ),
    []
  );

  return { contacts, isLoading };
};
