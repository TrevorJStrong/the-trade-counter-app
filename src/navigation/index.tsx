import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home/HomeScreen";
import BasketScreen from "../screens/Basket/BasketScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import TabBar from "./tabBar";
import StoreScreen from "../screens/Home/StoreScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/header";
import { useNavigation, NavigatorScreenParams } from "@react-navigation/native";
import { colours } from "../../styleConstants";
import BackButton from "./backButton";
import ChangeAddress from "../components/modals/ChangeAddress";
import FilterSearch from "../components/modals/FilterSearch";

// type check the routes and params within the tabbar navigators
export type RootStackParams = {
  HomeStack: NavigatorScreenParams<HomeStackParams>;
  BasketTab: undefined;
  ProfileTab: undefined;
};

// type check the route names and params within the HomeStack screens
export type HomeStackParams = {
  // set screens to undefined if the route doesn't have any params
  Home: undefined;
  Store: {
    store_categories: string[];
    store_logo: string;
  };
};

export type BasketStackParams = {};
export type ProfileStackParams = {};

// tell createBottomTabNavigator to use RootStackParams
// we do this by passing it as a generic to the createBottomTabNavigator function
const BottomTabs = createBottomTabNavigator<RootStackParams>();

// tell createNativeStackNavigator to use the HomeStackParams
// we do this by passing it as a generic to the createNativeStackNavigator function
const HomeStack = createNativeStackNavigator<HomeStackParams>();

const HomeScreenStack = () => {
  const navigation = useNavigation();
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShadowVisible: false,
          headerShown: true,
          headerTitle: (props) => <Header {...props} />,
        }}
      />
      <HomeStack.Screen
        name="Store"
        component={StoreScreen}
        options={{
          headerShadowVisible: false,
          headerShown: true,
          title: null,
          headerLeft: (props) => <BackButton {...props} />,
          headerRight: () => {
            return (
              <View style={styles.flexCol}>
                <Text style={{ fontFamily: "montserrat" }}>
                  1 Greenside Close
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("ChangeAddress")}
                >
                  <Text style={styles.buttonText}>change</Text>
                </TouchableOpacity>
              </View>
            );
          },
        }}
      />
      <HomeStack.Screen
        name="ChangeAddress"
        component={ChangeAddress}
        options={{
          headerShadowVisible: false,
          headerShown: true,
          presentation: "modal",
          headerTitle: "Change Address",
        }}
      />
      <HomeStack.Screen
        name="FilterSearch"
        component={FilterSearch}
        options={{
          headerShadowVisible: false,
          headerShown: false,
          presentation: "modal",
        }}
      />
    </HomeStack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <BottomTabs.Navigator
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}
      sceneContainerStyle={{
        backgroundColor: "#fff",
      }}
    >
      <BottomTabs.Screen
        name="HomeStack"
        component={HomeScreenStack}
        options={{
          headerShown: false,
        }}
      />
      <BottomTabs.Screen
        name="BasketTab"
        component={BasketScreen}
        options={{
          headerShown: false,
        }}
      />
      <BottomTabs.Screen
        name="ProfileTab"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  flexCol: {
    flexDirection: "column",
    marginLeft: Platform.OS === "ios" ? 10 : 5,
  },
  buttonText: {
    color: colours.secondary,
    textAlign: "right",
    fontFamily: "montserrat",
  },
});
