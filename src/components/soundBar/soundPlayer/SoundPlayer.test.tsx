import { fireEvent, render, screen } from "@testing-library/react";
import { SoundPlayer } from "./SoundPlayer";
import audio from "../../../assets/testAudio/audioTest.mp3";
import { ListType } from "../../../types/enums.d";


let isPlaying = false;
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

describe("When SoundPlayer is rendered", () => {


    beforeEach(() => {

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

        expect(screen.getByTestId("sound-player")).toBeDefined();
    });

    test("when play button is clicked, setIsPlaying should be called", () => {

        const playButton = screen.getByTestId("play-btn");
        expect(playButton).toBeDefined();
        fireEvent.click(playButton);
        expect(setIsPlaying).toHaveBeenCalledWith(true);

    });

    test("when pause button is clicked, setIsPlaying should be called", () => {

        render(<SoundPlayer
            isPlaying={true}
            setIsPlaying={setIsPlaying}
            audioElement={audioElement}
            currentTrack={currentTrack}
            setCurrentTrack={setCurrentTrack}
            handlePrevTrack={handlePrevTrack}
            handleNextTrack={handleNextTrack}
            loopActive={loopActive}
            setLoopActive={setLoopActive}

        />);

        const pauseButton = screen.getByTestId("pause-btn");
        expect(pauseButton).toBeDefined();
        fireEvent.click(pauseButton);
        expect(setIsPlaying).toHaveBeenCalledWith(false);
    });

    test("when player is clicked expanded menu should be opened", () => {


        const togglePlayerBtn = screen.getByTestId("toggle-player-btn");
        fireEvent.click(togglePlayerBtn);
        const expandedPlayer = screen.getByTestId("expanded-player");
        expect(expandedPlayer).toBeDefined();
    });

    test("next button should be displayed, and call handleNextTrack when clicked", () => {

        const togglePlayerBtn = screen.getByTestId("toggle-player-btn");
        fireEvent.click(togglePlayerBtn);
        const nextBtn = screen.getByTestId("next-btn");
        expect(nextBtn).toBeDefined();
        fireEvent.click(nextBtn);
        expect(handleNextTrack).toHaveBeenCalled();

    });

    test("prev button should be displayed, and call handlePrevTrack when clicked", () => {

        const togglePlayerBtn = screen.getByTestId("toggle-player-btn");
        fireEvent.click(togglePlayerBtn);
        const prevBtn = screen.getByTestId("prev-btn");
        expect(prevBtn).toBeDefined();
        fireEvent.click(prevBtn);
        expect(handlePrevTrack).toHaveBeenCalled();

    });

    test("close button should be displayed, and reduced player should be displayed when clicked", () => {

        const togglePlayerBtn = screen.getByTestId("toggle-player-btn");
        fireEvent.click(togglePlayerBtn);
        const toggleCloseBtn = screen.getByTestId("close-expanded-btn");
        expect(toggleCloseBtn).toBeDefined();
        fireEvent.click(toggleCloseBtn);
        const reducedPlayer = screen.getByTestId("sound-player");
        expect(reducedPlayer).toBeDefined();
    });


});



