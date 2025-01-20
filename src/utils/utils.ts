import { Appearance } from "react-native";

let colorScheme = Appearance.getColorScheme();

/**
 * function to determine the color palette
 */
const getColorStyleHeader =  () => {
    if (colorScheme) {
        if (colorScheme === 'dark') {
            return '#F1F1F1';
        } else {
            return '#0F0F0F';
        }
    }
};

export const colorStyleHeader = getColorStyleHeader();