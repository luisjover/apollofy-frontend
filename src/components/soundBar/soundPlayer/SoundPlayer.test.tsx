import { fireEvent, render, screen } from "@testing-library/react";
import { SoundPlayer } from "./SoundPlayer";
import audio from "../../../assets/testAudio/audioTest.mp3";
import { ListType } from "../../../types/enums.d";

const isPlaying = false;
const setIsPlaying = vi.fn();
const audioElement = audio;
const currentTrack = {
    id: "1",
    name: "testTrack",
    imageUrl: "https://res.cloudinary.com/dmeh7kzjm/image/upload/v1697495630/covers/wlpxorqn46o9dwb3z1fa.jpg",
    artists: [],
    liked: 0,
    genres: [],
    audioUrl: "https://res.cloudinary.com/dmeh7kzjm/video/upload/v1697495893/tracks/iwkqbmtwlhhvedmorbzq.mp3",
    verified: false,
    userId: "1",
    privacity: false,
    progress: 0,
    duration: 130000,
    listType: ListType.TRACK
}
const setCurrentTrack = vi.fn();
const handlePrevTrack = vi.fn();
const handleNextTrack = vi.fn();
const loopActive = false;
const setLoopActive = vi.fn();

describe("When SoundBar is rendered", () => {
    beforeEach(() => {
        render(<audio src="../../../assets/testAudio/audioTest.mp3" />)
        render(<SoundPlayer
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            audioElement={audioElement}
            currentTrack={currentTrack}
            setCurrentTrack={setCurrentTrack}
            handlePrevTrack={handlePrevTrack}
            handleNextTrack={handleNextTrack}
            loopActive={loopActive}
            setLoopActive={setLoopActive}

        />);
    })

    test("component should be displayed", () => {

        expect(screen.getByTestId("sound-bar")).toBeDefined();
    });

    test("when play button is clicked, setIsPlaying should be called", () => {

        const playButton = screen.getByTestId("play-btn");
        expect(playButton).toBeDefined();
        fireEvent.click(playButton);
        expect(setIsPlaying).toHaveBeenCalled();
        // const pauseButton = screen.getByTestId("pause-btn");
        // expect(pauseButton).toBeDefined();
        // fireEvent.click(pauseButton);
        // expect(setIsPlaying).toHaveBeenCalled();
    });


});