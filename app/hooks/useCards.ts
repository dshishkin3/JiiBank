import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useMemo, useState } from "react";

import { db } from "../firebase";
import { useAuth } from "./useAuth";
import { ICard } from "../components/screens/home/cards/types";

export const useCards = () => {
  const { user } = useAuth();

  const [cards, setCards] = useState<ICard[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "cards"), where("userId", "==", user?.uid)),
        (snapshot) => {
          setCards(
            snapshot.docs.map(
              (d) =>
                ({
                  _id: d.id,
                  ...d.data(),
                } as ICard)
            )
          );
          setIsLoading(false);
        }
      ),
    []
  );

  const value = useMemo(
    () => ({
      isLoading,
      cards,
    }),
    [isLoading, cards]
  );

  return value;
};
