import { Appearance, StyleSheet } from "react-native";
import { colorStyleHeader } from "../utils/utils";

export const styles = StyleSheet.create({
    appContainer: {
        flex: 5,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: '100%',
        maxHeight: '100%',
        minHeight: '90%',
    },
    headerContainer: {
        flex: 1,
        width: '100%',
        minWidth: '90%',
        height: '10%',
        maxHeight: '10%',
        minHeight: '10%',
    },
    bodyContainer: {
        flex: 3,
        width: '100%',
        minWidth: '90%',
        height: '80%',
        maxHeight: '80%',
        minHeight: '80%',
    },
    footerContainer: {
        flex: 1,
        width: '100%',
        minWidth: '90%',
        height: '10%',
        maxHeight: '10%',
        minHeight: '10%',
    },
    headerText: {
        fontFamily: 'Roboto',
        fontSize: 24,
        fontWeight: 'thin',
        lineHeight: 28,
        color: colorStyleHeader
    },
});