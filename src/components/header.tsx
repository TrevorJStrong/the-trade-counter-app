import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Platform } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { colours } from "../../styleConstants";
import { Border } from "./border";
import { useNavigation } from "@react-navigation/native";

interface HeaderProps {
  title: string;
  size: number;
  navigation: any;
}

const showModal = (title: string, navigation: any) => {
  switch (title) {
    case 'change':
      navigation.navigate("ChangeAddress")
      break;
    case 'filter':
      navigation.navigate("FilterSearch")
      break;
      case 'search':
        navigation.navigate("GlobalSearch")
        break;
    default:
      break;
  }
}

const HeaderButton = ({ title, size, navigation }: HeaderProps) => (
  <TouchableOpacity
    onPress={() => showModal(title, navigation)}
  >
    <Text style={[styles.buttonText, { fontSize: size }]}>{title}</Text>
  </TouchableOpacity>
);

const Header = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <View style={styles.flexCol}>
          <Text style={{ fontFamily: 'montserrat' }}>1 Greenside Close</Text>
          <HeaderButton title="change" size={12} navigation={navigation} />
        </View>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <View style={styles.filterContainer}>
            <HeaderButton title="filter" size={14} navigation={navigation} />
          </View>
          <View style={{ marginRight: Platform.OS === 'ios' ? 20 : 30 }}>
            <AntDesign name="search1" size={20} color={colours.primaryText} />
          </View>
        </View>
      </View>
      <Border />
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  filterContainer: {
    marginRight: 10
  },
  primaryText: {
  },
  flexCol: {
    flexDirection: "column",
    marginLeft: Platform.OS === 'ios' ? 10 : 5,
  },
  buttonText: {
    color: colours.secondary,
    fontFamily: 'montserrat'
  },
});
