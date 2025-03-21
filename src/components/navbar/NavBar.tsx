import './navBar.css'
import { BiHomeAlt2, BiSearch, BiSolidHeart } from 'react-icons/bi'
import { MdLibraryAdd } from 'react-icons/md'
import { GiAlienStare } from 'react-icons/gi'
import { useLocation, useNavigate } from 'react-router-dom'
import { useUserContext } from '../../utils/hooks/useUserContext'
import { fetchData, postNewUser } from '../../api/fetchApi'
import { useAuth0 } from '@auth0/auth0-react'
import { useTrackListContext } from '../../utils/hooks/useTrackListContext'
import { TrackType } from '../../types/track'
import { useEffect } from 'react'
import { UserType } from '../profileChart/ProfileChart'
import { ArtistType } from '../../types/artist'
import { PlaylistType } from '../../types/playlist'
import { AlbumType } from '../../types/album'
import { useTopTrendsContext } from '../../utils/hooks/useTopTrendsContext'
import { TopTrendsType } from '../../context/TopTrendsContextProvider'
import { GenreType } from '../../types/genre'
import { useGenreContext } from '../../utils/hooks/useGenresContext'
import { FavouriteType } from '../../pages/libraryPage/LibraryPage'
import { PossibleItems } from '../../types/enums'
import { useUserLibraryListContext } from '../../utils/hooks/useUserLibraryListContext'
import { createUserStats } from '../../api/statsFetchApi'

export interface UserDataType {
    userName: string,
    email: string,
    imageUrl?: string
}

export const NavBar = () => {

    const navigate = useNavigate();
    const { user, getAccessTokenSilently } = useAuth0();
    const { currentUser, setCurrentLoggedUser } = useUserContext();
    const { trackList, setNewTrackList } = useTrackListContext();
    const { changeUserLibraryList } = useUserLibraryListContext();
    const { setGenres } = useGenreContext();
    const location = useLocation().pathname.slice(1)
    const { changeTopTrends } = useTopTrendsContext()

    if (trackList === null) {
        (async function fetchTracks() {
            const tracksFetched = await fetchData(getAccessTokenSilently, "tracks") as TrackType[];
            tracksFetched.forEach((track) => {
                track.progress = 0;
                track.duration = 0;
            })
            setNewTrackList(tracksFetched);

        }());
    }

    const handleIconsClicked = (path: string) => {

        switch (path) {
            case 'home': navigate('home');
                break
            case 'search': navigate('search');
                break
            case 'form': navigate('form')
                break
            case 'library': navigate('library')
                break
            case 'user': navigate('user')
                break
        }
    }

    const iconsNavbar = [
        {
            id: "home",
            path: "home"
        },
        {
            id: "search",
            path: "search"
        },
        {
            id: "form",
            path: "form"
        },
        {
            id: "library",
            path: "library"
        },
        {
            id: "user",
            path: "user"
        }
    ]

    useEffect(() => {
        if (currentUser) {
            const allLists: PossibleItems[] = []
            const fetchUserLibraryList = async () => {
                const favLists = currentUser?.favourites as FavouriteType[]
                if (favLists) {
                    favLists.map(async (list: FavouriteType) => {
                        const type = list.listType;
                        let result: PossibleItems | null = null;
                        switch (type) {
                            case "artist": result = await fetchData(getAccessTokenSilently, `${list.listType}s/${list.artist?.id}`) as ArtistType
                                break;
                            case "track": result = await fetchData(getAccessTokenSilently, `${list.listType}s/${list.track?.id}`) as TrackType
                                break;
                            case "album": result = await fetchData(getAccessTokenSilently, `${list.listType}s/${list.album?.id}`) as AlbumType
                                break;
                            case "playlist": result = await fetchData(getAccessTokenSilently, `${list.listType}s/${list.playlist?.id}`) as PlaylistType
                                break;
                            default: result = null
                        }

                        if (result) allLists.push(result)
                        if (favLists.length === allLists.length) {
                            changeUserLibraryList(allLists);
                        }
                    })
                }
            };
            fetchUserLibraryList();
        }
    }, [currentUser])

    useEffect(() => {
        if (!currentUser) {
            (async function fetchUser() {
                const usersFetched = await fetchData(getAccessTokenSilently, 'users') as UserType[];
                const loggedUserObject = usersFetched.find(({ email }) => email === user?.email);

                if (loggedUserObject !== undefined) {
                    setCurrentLoggedUser(loggedUserObject);
                } else {
                    if (!(user?.email && user.name)) return
                    const newUser: UserDataType = {
                        email: user?.email,
                        userName: user?.name,
                        imageUrl: user?.picture
                    }
                    const newFetchedUser = await postNewUser(getAccessTokenSilently, newUser);
                    setCurrentLoggedUser(newFetchedUser);
                    createUserStats(newFetchedUser.id);
                }
            }());
        }
        const button = document.querySelector(`#${location === "detail-page" ? "home" : location.split("-")[0]}`) as HTMLInputElement;
        button.checked = true;
        (async function fetchTopTrends() {
            const topArtists = await fetchData(getAccessTokenSilently, "artists/top") as ArtistType[];
            const topPlaylists = await fetchData(getAccessTokenSilently, "playlists/top") as PlaylistType[];
            const topAlbums = await fetchData(getAccessTokenSilently, "albums/top") as AlbumType[];
            const topTrends: TopTrendsType = { topArtists, topAlbums, topPlaylists }
            changeTopTrends(topTrends);
        }());
        (async function fetchGenres() {
            const genres = await fetchData(getAccessTokenSilently, "genres") as GenreType[];
            setGenres(genres);
        }());
    }, [])

    return (
        <nav className="navBar-bottom-container">
            {iconsNavbar.map((icon, index) => (
                <div className="icon-navbar-container" key={index}>
                    <input id={icon.id} name="icon-navbar-bottom" type="radio" className="input-navbar-bottom" />
                    <label htmlFor={icon.id} className="label-navbar-bottom" onClick={() => handleIconsClicked(icon.path)}>

                        {index === 0 &&
                            <>
                                <BiHomeAlt2 className="icons-navbar" />
                                <h3 className='desktop-icon-title'>Home</h3>
                            </>}

                        {index === 1 &&
                            <>
                                <BiSearch className="icons-navbar" />
                                <h3 className='desktop-icon-title'>Search</h3>
                            </>}

                        {index === 2 &&
                            <>
                                <MdLibraryAdd className="icons-navbar" />
                                <h3 className='desktop-icon-title'>Add Music</h3>
                            </>}

                        {index === 3 &&
                            <>
                                <BiSolidHeart className="icons-navbar" />
                                <h3 className='desktop-icon-title'>Favourites</h3>
                            </>}

                        {index === 4 &&
                            <>
                                <GiAlienStare className="icons-navbar" />
                                <h3 className='desktop-icon-title'>Profile</h3>
                            </>}

                    </label>
                </div>
            ))}
        </nav>
    )
}
