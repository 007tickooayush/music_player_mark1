import { playListData } from "./src/constants";
import MusicControl, { Command } from "react-native-music-control";

export const musicPlayerService = () => {
    MusicControl.enableBackgroundMode(true);

    MusicControl.enableControl(Command.play, true);
    MusicControl.enableControl(Command.pause, true);
    MusicControl.enableControl(Command.stop, true);
    MusicControl.enableControl(Command.nextTrack, true);
    MusicControl.enableControl(Command.previousTrack, true);
    MusicControl.enableControl(Command.seek, true);
    MusicControl.enableControl(Command.seekForward, false);
    MusicControl.enableControl(Command.seekBackward, false);

    MusicControl.on(Command.play, (val) => {
        console.log("Playing");
    });

    MusicControl.on(Command.pause, (val) => {
        console.log("Paused");
    });

    MusicControl.on(Command.stop, (val) => {
        console.log("Stopped");
    });
    
};