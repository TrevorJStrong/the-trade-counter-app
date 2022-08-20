import { StyleSheet } from "react-native";
import { StyleProps } from ".";

export default StyleSheet.create<StyleProps>({
    container: {
        flex: 1,
        width: "90%",
        alignSelf: "center",
    },
    topContainer: {
        flex: 0,
        maxHeight: '30%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    bottomContainer: {
        flex: 1,
    }
});