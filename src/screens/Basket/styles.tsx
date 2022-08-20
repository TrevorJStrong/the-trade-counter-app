import { StyleSheet } from "react-native";
import { colours, fontSizes } from "../../../styleConstants";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center'
    },
    basketEmptyTitle: {
        fontSize: fontSizes.large,
        marginTop: 20,
        marginBottom: 20,
        fontFamily: 'montserrat'
    },
    basketEmptyMessage: {
        fontSize: fontSizes.small,
        marginBottom: 20,
        width: 280,
        textAlign: 'center',
        fontFamily: 'montserrat'
    },
    button: {
        backgroundColor: colours.secondary,
        padding: 10,
        borderRadius: 25,
        width: 200
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: fontSizes.small,
        fontFamily: 'montserrat'
    }
});