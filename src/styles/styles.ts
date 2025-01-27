import { Appearance, StyleSheet } from "react-native";
import { colorStyleHeader } from "../utils/utils";

export const styles = StyleSheet.create({
    appContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        maxHeight: '100%',
        minHeight: '90%',
    },
    headerContainer: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // width: '100%',
        // minWidth: '90%',
        // height: '10%',
        // maxHeight: '10%',
        // minHeight: '10%',
    },
    bodyContainer: {
        display: 'flex',
        flex: 8,
        alignItems: 'center',
        justifyContent: 'center',
        // width: '100%',
        // minWidth: '90%',
        // height: '80%',
        // maxHeight: '80%',
        // minHeight: '80%',
    },
    footerContainer: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // width: '100%',
        // minWidth: '90%',
        // height: '10%',
        // maxHeight: '10%',
        // minHeight: '10%',
    },
    headerText: {
        fontFamily: 'Roboto',
        fontSize: 24,
        fontWeight: 'thin',
        lineHeight: 28,
        color: colorStyleHeader
    },
});