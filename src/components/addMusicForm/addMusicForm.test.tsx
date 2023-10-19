import { fireEvent, render, screen } from "@testing-library/react";
import { AddMusicForm } from "./AddMusicForm";
import { t } from "i18next";





describe("", () => {

    beforeEach(() => {
        render(<AddMusicForm />)
    })

    test("when component is rendered form should exists", () => {
        const form = screen.getByTestId("add-form");
        expect(form).toBeDefined();
    })

    test("audio input should accept only mp3/wav/ogg", () => {
        const audioInput = screen.getByTestId("audio-input");
        const acceptAttribute = audioInput.getAttribute("accept");
        expect(acceptAttribute).toBe("audio/mp3, audio/wav, audio/ogg");
    })



})