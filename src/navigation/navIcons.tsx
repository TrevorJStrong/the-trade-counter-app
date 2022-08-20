import React from "react";
import { View } from "react-native";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { colours } from "../../styleConstants";
import { BasketIcon } from "../components/BasketIcon";

interface NavigationIconProps {
  route: string;
  isFocused: boolean;
}

const NavigationIcon = ({ route, isFocused }: NavigationIconProps) => {
  const renderIcon = (route: string, isFocused: boolean) => {
    let height: number = 20;
    switch (route) {
      case "HomeStack":
        return (
          <Entypo
            name="home"
            size={height}
            color={isFocused ? colours.secondary : "#fff"}
          />
        );
      case "BasketTab":
        return (
          <>
          <Entypo
            name="shopping-cart"
            size={height}
            color={isFocused ? colours.secondary : "#fff"}
          />
          {/* <BasketIcon /> */}
          </>
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
