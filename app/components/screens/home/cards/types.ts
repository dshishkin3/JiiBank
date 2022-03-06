export type TypeCurrency = "USD" | "EUR";
export type TypeName = "World" | "Prepaid";

export interface ICard {
  _id: string;
  userId: string;
  balance: number;
  cardNumber: string;
  currency: TypeCurrency;
  name: TypeName;
}
