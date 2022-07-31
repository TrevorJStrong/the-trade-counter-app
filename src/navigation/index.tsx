import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home/HomeScreen";
import BasketScreen from "../screens/Basket/BasketScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import TabBar from "./tabBar";
import StoreScreen from "../screens/Home/Store/CategoryListScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/header";
import { NavigatorScreenParams } from "@react-navigation/native";
import BackButton from "./backButton";
import ChangeAddress from "../components/modals/ChangeAddress";
import FilterSearch from "../components/modals/FilterSearch";
import CurrentLocation from "./currentLocation";
import ProductsListScreen from "../screens/Home/Store/ProductsListScreen";
import { STORE_PRODUCTS_SCREEN } from "./routes";
import SearchBar from "../components/seachBar";
import { SafeAreaView } from "react-native-safe-area-context";

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
  StoreCategories: {
    store_categories: string[];
    store_logo: string;
  };
  StoreProducts: undefined;
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
        name="StoreCategories"
        component={StoreScreen}
        options={{
          headerShadowVisible: false,
          headerShown: true,
          title: null,
          headerLeft: (props) => <BackButton {...props} />,
          headerRight: () => {
            return (
              <CurrentLocation />
            );
          },
        }}
      />
      <HomeStack.Screen 
        name={STORE_PRODUCTS_SCREEN}
        component={ProductsListScreen}
        options={{
          headerShadowVisible: false,
          headerShown: true,
          title: null,
          headerLeft: (props) => <BackButton {...props} />,
          headerRight: () => {
            return (
              <CurrentLocation />
            );
          },
        }}
      />
      <HomeStack.Screen
        name="ChangeAddress"
        component={ChangeAddress}
        options={{
          headerShadowVisible: true,
          headerShown: true,
          title: null,
          header: () => {
            return (
              <>
                {/* SEPERATE COMPONENT */}
                <SafeAreaView style={{ 
                    flexDirection: 'row', 
                    width: '100%', 
                    justifyContent: 'space-around', 
                    alignSelf: 'center',
                    backgroundColor: '#fff'                  
                  }}>
                  <BackButton />
                  <SearchBar />
                </SafeAreaView>
              </>
            )
          }
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
