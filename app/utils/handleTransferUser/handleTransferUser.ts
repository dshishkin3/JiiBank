import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { Alert } from "react-native";
import { db } from "../../firebase";

import { ICard } from "../../components/screens/home/cards/types";

interface IhandleTransferUserProps {
  fromCard: ICard;
  cardNumber: string;
  sum: string;
  _id: string;
  name: string;
}

export const handleTransferUser = async (form: IhandleTransferUserProps) => {
  try {
    let cardToId = "";
    let currentToBalance = "";

    const querySnapshot = await getDocs(
      query(
        collection(db, "cards"),
        where("cardNumber", "==", form.cardNumber),
        limit(1)
      )
    );

    querySnapshot.docs.forEach((doc) => {
      cardToId = doc.id;
    });

    const docRefTo = doc(db, "cards", cardToId);
    const docSnapTo = await getDoc(docRefTo);

    if (docSnapTo.exists()) {
      currentToBalance = docSnapTo.data().balance;
    } else {
      Alert.alert("The card where you are sending money was not found");
      return;
    }

    await updateDoc(docRefTo, {
      balance: currentToBalance + Number(form.sum),
    });

    const docRefFrom = doc(db, "cards", form.fromCard._id);
    if (form.fromCard.balance < Number(form.sum)) {
      Alert.alert("There is not enough money in your account");
    } else {
      await updateDoc(docRefFrom, {
        balance: form.fromCard.balance - Number(form.sum),
      });

      // add operation in table users
      const docRefUser = doc(db, "users", form._id);

      await updateDoc(docRefUser, {
        operations: arrayUnion({
          name: form.name,
          sum: form.sum,
          timestamp: new Date(),
        }),
      });

      Alert.alert("The operation was successful!");
    }
  } catch (error) {
    Alert.alert("Transfer error");
  }
};
