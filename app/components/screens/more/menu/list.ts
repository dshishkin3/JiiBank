import { IMoreItem } from "./types";

const startUrl = "https://www.tinkoff.ru";

export const menu: IMoreItem[] = [
  {
    title: "ATM machines",
    desc: "Search for JiiBank ATMs and other banks on the map",
    iconName: "account-balance",
    link: `${startUrl}/maps/atm/`,
  },
  {
    title: "Top-up points",
    desc: "Cash replenisment in rubles, dollars, euros",
    iconName: "credit-card",
    link: `${startUrl}/maps/payment/`,
  },
  {
    title: "Ordering certificates",
    desc: "Account statements by e-mail and in paper form",
    iconName: "find-in-page",
    link: `${startUrl}/cards/debit-cards/`,
  },
  {
    title: "For business",
    desc: "Online banking for small business",
    iconName: "business",
    link: `${startUrl}/business/`,
  },
];
