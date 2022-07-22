import styled from "styled-components/native";
import Constants from "expo-constants";

// create a styled component 'ScreenContainer' that wraps the react-native SafeAreaView component
export const ScreenContainer = styled.SafeAreaView`
  flex: 1;
  width: 90%;
  align-self: center;
  padding-top: ${Constants.statusBarHeight + 'px'};
`;