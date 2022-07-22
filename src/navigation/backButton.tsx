import React from "react";
import { StyleSheet, TouchableOpacity, ViewStyle } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { colours } from "../../styleConstants";
import { useNavigation } from "@react-navigation/native";

type StyleProps = {
  backButton: ViewStyle;
}

const BackButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.backButton}
      onPress={() => navigation.goBack()}
    >
      <Entypo name="chevron-small-left" size={24} color={colours.primaryText} />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create<StyleProps>({
  backButton: {
    backgroundColor: colours.grey,
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
    justifyContent: "center",
    alignItems: "center",
  },
});
