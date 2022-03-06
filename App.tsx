import { LogBox } from "react-native";
import StatusBarBlock from "./app/components/ui/statusBar/StatusBar";
import Navigation from "./app/navigation/Navigation";

import { AuthProvider } from "./app/providers/authProvider/AuthProvider";

export default function App() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}

LogBox.ignoreAllLogs();
