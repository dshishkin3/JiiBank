import { View } from "react-native";
import React, { FC } from "react";

import { menu } from "./list";
import MenuItem from "./menuItem/MenuItem";

const Menu: FC = () => {
  return (
    <View>
      {menu.map((item) => (
        <MenuItem key={item.title} item={item} />
      ))}
    </View>
  );
};

export default Menu;
