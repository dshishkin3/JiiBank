import Activity from "../components/screens/activity/Activity";
import Auth from "../components/screens/auth/Auth";
import Home from "../components/screens/home/Home";
import Payments from "../components/screens/payments/Payments";
import Profile from "../components/screens/profile/Profile";
import SendMoney from "../components/screens/sendMoney/SendMoney";
import More from "../components/screens/more/More";
import Welcome from "../components/screens/welcome/Welcome";

export const publicRoutes = [
  { name: "Welcome", component: Welcome },
  { name: "Auth", component: Auth },
];

export const privateRoutes = [
  { name: "Home", component: Home },
  { name: "Payments", component: Payments },
  { name: "Activity", component: Activity },
  { name: "More", component: More },
  { name: "Profile", component: Profile },
  { name: "SendMoney", component: SendMoney },
];
