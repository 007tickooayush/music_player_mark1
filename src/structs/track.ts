import { Utils } from "../utils/utils";


export default class Track {

    id: string;
    path: string;
    position: number | null | undefined;
    additionalInfo: {
        title: string | null | undefined;
        artwork: any | null | undefined;
        artist: string | null | undefined;
        album: string | null | undefined;
        genre: string | null | undefined;
        duration: number | null | undefined;
    } | null | undefined;

    constructor(properties: {
        id: string,
        path: string,
        position: number | null | undefined,
        additionalInfo: {
            title: string | null | undefined,
            artwork: any | null | undefined,
            artist: string | null | undefined,
            album: string | null | undefined,
            genre: string | null | undefined,
            duration: number | null | undefined,
        } | null | undefined,
    }) {

        if (Utils?.isNullOrUndefined(properties)) {
            throw new Error('Properties must not be either null or undefined. Received [' + properties + ']');
        }

        if (Utils?.isNullOrUndefined(properties.id) || Utils?.isNumber(properties.id)) {
            throw new Error('Id must not be either null or undefined. Allowed [number]. Received [' + properties.id + ']');
        }

        if (Utils?.isNullOrUndefined(properties.path) || Utils?.isNumber(properties.path)) {
            throw new Error('Path must not be either null or undefined. Allowed [string]. Received [' + properties.path + ']');
        }

        if (!Utils?.isNullOrUndefined(properties.position)) {
            if (!Utils?.isNumber(properties.position) || (parseInt(properties.position?.toString() || '0') < 0)) {
              throw new Error('Position must be greater or equal than zero. Allowed [number | 0 >=]. Received [' + properties.position + ']');
            }
          }

        this.id = properties.id;
        this.path = properties.path;
        this.position = properties.position;
        this.additionalInfo = properties.additionalInfo;

    }
}