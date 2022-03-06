import React, { FC, useState } from "react";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { privateRoutes, publicRoutes } from "./AppRouter";
import { useAuth } from "../hooks/useAuth";
import Footer from "../components/footer/Footer";
import { useEffect } from "react";

const Navigation: FC = () => {
  const [route, setRoute] = useState<string | undefined>(undefined);

  const { user } = useAuth();

  const Stack = createNativeStackNavigator();
  const ref = useNavigationContainerRef();

  // active route
  useEffect(() => {
    const listener = ref.addListener("state", () =>
      setRoute(ref.getCurrentRoute()?.name)
    );

    return () => {
      ref.removeListener("state", listener);
    };
  }, []);

  return (
    <>
      <NavigationContainer ref={ref}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {user ? (
            <>
              {privateRoutes.map((item) => (
                <Stack.Screen
                  name={item.name}
                  component={item.component}
                  key={item.name}
                />
              ))}
            </>
          ) : (
            <>
              {publicRoutes.map((item) => (
                <Stack.Screen
                  name={item.name}
                  component={item.component}
                  key={item.name}
                />
              ))}
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
      {user && ref.getCurrentRoute()?.name !== "SendMoney" && (
        <Footer navigate={ref.navigate} currentRoute={route} />
      )}
    </>
  );
};

export default Navigation;
