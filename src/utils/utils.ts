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


let _isFunction = (value: any): boolean => typeof value === 'function';
let _isNumber = (value: any): boolean => !isNaN(parseFloat(value)) && isFinite(value);
let _isNullOrUndefined = (value: any): boolean => value === null || value === undefined;
let _isString = (value: any): boolean => typeof value === 'string';


export const Utils: {
    isFunction: (value: any) => boolean,
    isNumber: (value: any) => boolean,
    isNullOrUndefined: (value: any) => boolean,
    isString: (value: any) => boolean,
} | undefined | null = {
    isFunction: _isFunction,
    isNumber: _isNumber,
    isNullOrUndefined: _isNullOrUndefined,
    isString: _isString,
};
