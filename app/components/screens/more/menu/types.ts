import { MaterialIcons } from "@expo/vector-icons";

export interface IMoreItem {
  title: string;
  desc: string;
  iconName: keyof typeof MaterialIcons.glyphMap;
  link: string;
}
