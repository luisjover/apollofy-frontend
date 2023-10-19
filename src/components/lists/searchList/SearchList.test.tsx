import { render, screen } from "@testing-library/react";
import SearchList from "./SearchList";
import { GenreTypes, ListType } from "../../../types/enums.d";
import { DataRetrievedType } from "../../../context/SearchDataContextProvider";



const track = {
    id: "1",
    name: "test track",
    imageUrl: "",
    artists: [],
    liked: 8,
    genres: [GenreTypes.HIPHOP],
    audioUrl: "",
    verified: false,
    userId: "",
    privacity: false,
    album: {
        id: "1",
        name: "Test Album"
    },
    progress: 0,
    duration: 10000,
    listType: ListType.TRACK
}

const dataRetrieved: DataRetrievedType = {
    albums: [],
    playlists: [],
    tracks: [track],
    artists: [],
    users: []
};

const focus = true;
const setFocus = vi.fn();
const searchInput = "est";
const customFilter = false;
const setSearchInput = vi.fn();



describe("When SearchList is rendered", () => {
    beforeEach(() => {
        render(<SearchList
            dataRetrieved={dataRetrieved}
            focus={focus}
            setFocus={setFocus}
            searchInput={searchInput}
            customFilter={customFilter}
            setSearchInput={setSearchInput}
        />)
    })

    test("", () => {

        vi.mock('react-router-dom', () => ({
            useNavigate: vi.fn(() => vi.fn),
            useLocation: vi.fn(() => vi.fn)
        }))



        const tracksSearchTitle = screen.getByTestId("tracks-title");
        expect(tracksSearchTitle).toBeDefined();

    })
})