import { StyleSheet } from "react-native";
import { colours } from "../../../../styleConstants";

StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        alignSelf: 'center',
        marginBottom: 20,
        backgroundColor: colours.grey,
        padding: 15,
        borderRadius: 10
    },
    chevronContainer: {
        backgroundColor: colours.secondary,
        height: 25,
        width: 25,
        borderRadius: 25 / 2,
        justifyContent: 'center',
        alignItems: 'center'
    }
})