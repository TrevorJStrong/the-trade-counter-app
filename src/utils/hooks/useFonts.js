import * as Font from "expo-font";

export const useFonts = async () => {
    await Font.loadAsync({
        montserrat: require('../../../assets/fonts/Montserrat-Light.ttf')
    });
}