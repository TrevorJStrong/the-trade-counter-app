import React from "react";
import { View } from "react-native";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { colours } from "../../styleConstants";

interface NavigationIconProps {
  route: string;
  isFocused: boolean;
}

const NavigationIcon = ({ route, isFocused }: NavigationIconProps) => {
  const renderIcon = (route: string, isFocused: boolean) => {
    let height: number = 20;
    switch (route) {
      case "HomeTab":
        return (
          <Entypo
            name="home"
            size={height}
            color={isFocused ? colours.secondary : "#fff"}
          />
        );
      case "BasketTab":
        return (
          <Entypo
            name="shopping-cart"
            size={height}
            color={isFocused ? colours.secondary : "#fff"}
          />
        );
      case "ProfileTab":
        return (
          <FontAwesome
            name="user-circle"
            size={height}
            color={isFocused ? colours.secondary : "#fff"}
          />
        );
    }
  };

  return <View>{renderIcon(route, isFocused)}</View>;
};

export default NavigationIcon;
