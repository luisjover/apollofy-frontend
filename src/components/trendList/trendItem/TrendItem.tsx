
import { FaMusic } from "react-icons/fa";
import { BiPlay, BiStop } from "react-icons/bi";
import "./trendItem.css"
import { FC, useState } from "react";
// import { fetchData } from "../../../api/fetchApi";
import { AlbumType } from "../../../types/album";
import { PlaylistType } from "../../../types/playlist";
import { ArtistType } from "../../../types/artist";
// import { TrackType } from "../../../types/track";
import { useNavigate } from "react-router-dom";
import { useListDetailContext } from "../../../utils/hooks/useListDetailContext";
import { useTrackListContext } from "../../../utils/hooks/useTrackListContext";
// import { useAuth0 } from "@auth0/auth0-react";
// import { ListType } from "../../../types/enums";

interface TrendItemProps {
    item: ArtistType | PlaylistType | AlbumType
}

// enum ListType {
//     ALBUM = "album",
//     ARTIST = "artist",
//     PLAYLIST = "playlist",
//     USER = "user",
//     GENRE = "genre",
//     TRACK = "track"
// }

/**
 * Tenemos que averiguar que las tracklist que hay en cada trenditem con 
 * iguales que las tracklist que tenemos en el soundbar.
 * Si es así, el estado INDIVIDUAL de cada trenditem, va a poder coger la
 * información del contexto que dirige al botón de play / pause que tenemos
 * dentro de listDetailPage
 */

export const TrendItem: FC<TrendItemProps> = ({ ...props }) => {

    const { item } = props;
    // interface itemType {
    //     itemTitle: string,
    //     imageUrl: string,
    //     trackTitle: string,
    //     trackUrl: string,
    //     albumName: string,
    //     artistsName: string[]
    // }
    // const [item, setItem] = useState<itemType | null>(null);
    const navigate = useNavigate();
    const { setNewListDetail } = useListDetailContext();
    // const [trackIds, setTrackIds] = useState<string[] | null>(null);
    const { setNewTrackList } = useTrackListContext();
    // const { trackList } = useTrackListContext()
    // const { isListBtnActive } = useIsPlayingContext();
    // const { getAccessTokenSilently } = useAuth0();
    const [btnActive, setBtnActive] = useState(false)



    // useEffect(() => {
    //     (async function fetchItemData() {
    //         const data = await fetchData(getAccessTokenSilently, `${props.listType}s/${props.id}`) as (AlbumType | PlaylistType | ArtistType);
    //         const itemFetched = data;


    //         const newItem: itemType = {
    //             itemTitle: "",
    //             imageUrl: "",
    //             trackTitle: "",
    //             trackUrl: "",
    //             albumName: "",
    //             artistsName: []
    //         }
    //         let trackId = "";

    //         if (itemFetched.imageUrl !== undefined) newItem.imageUrl = itemFetched.imageUrl;
    //         if (itemFetched.name !== undefined) newItem.itemTitle = itemFetched.name;

    //         if (props.listType !== "artist") {
    //             const albumPlaylistItem = itemFetched as PlaylistType | AlbumType;

    //             if (albumPlaylistItem.tracks !== undefined && albumPlaylistItem.tracks.length > 0) {

    //                 trackId = albumPlaylistItem.tracks[0].id;

    //             }
    //         } else {
    //             const artistItem = itemFetched as ArtistType;
    //             if (artistItem.albums !== undefined) {
    //                 const artistAlbumFetched = await fetchData(getAccessTokenSilently, `albums/${artistItem.albums[0].id}`) as AlbumType;
    //                 const artistAlbum = artistAlbumFetched;
    //                 if (artistAlbum.tracks !== undefined) trackId = artistAlbum.tracks[0].id;
    //             }
    //         }

    //         const track = await fetchData(getAccessTokenSilently, `tracks/${trackId}`) as TrackType;

    //         if (track.name !== undefined) newItem.trackTitle = track.name;
    //         if (track.audioUrl !== undefined) newItem.trackUrl = track.audioUrl;
    //         if (track.album?.name !== undefined) newItem.albumName = track.album.name;
    //         if (track.artists !== undefined) {
    //             track.artists.forEach((artist) => {
    //                 if (artist.name !== undefined) newItem.artistsName.push(artist.name);
    //             })
    //         }
    //         setItem(newItem);
    //     }());
    // }, [])

    const handleListDetailClicked = () => {
        // (async function getList() {
        // const data = await fetchData(getAccessTokenSilently, `${props.listType}s/${props.id}`) as AlbumType | PlaylistType | ArtistType;
        setNewListDetail(item);
        navigate("/detail-page");
        // }());
    }

    const homePagePlayClicked = (e: any) => {
        e.stopPropagation();
        setBtnActive(!btnActive);
        // if (trackIds === null) return;
        // (async function getTracksById() {
        //     let newTrackList: TrackType[] = []
        //     for (let i = 0; i < trackIds.length; i++) {
        //         const track = await fetchData(getAccessTokenSilently, `tracks/${trackIds[i]}`) as TrackType;
        //         newTrackList.push(track)
        //     }
        if (item.tracks) setNewTrackList(item?.tracks);
        // }());
    }

    // useEffect(() => {
    //     (async function setTracksSoundbar() {
    //         const data = await fetchData(getAccessTokenSilently, `${props.listType}s/${props.id}`) as AlbumType | PlaylistType | ArtistType;
    //         const dataFetched = data as (AlbumType | PlaylistType | ArtistType);
    //         if (props.listType !== ListType.ARTIST) {
    //             const playlistOrAlbum = dataFetched as AlbumType | PlaylistType;

    //             let trackListIds: string[] = [];
    //             playlistOrAlbum.tracks?.forEach(async (track) => {
    //                 trackListIds.push(track.id)
    //             })
    //             setTrackIds(trackListIds);
    //         } else {

    //             const artistObtained = dataFetched as ArtistType;

    //             let trackListIdsArtist: string[] = [];
    //             artistObtained.albums?.forEach(async (album, albumIndex) => {

    //                 const albumFetched = await fetchData(getAccessTokenSilently, `albums/${album.id}`) as AlbumType;


    //                 albumFetched.tracks?.forEach((track, trackIndex) => {
    //                     trackListIdsArtist?.push(track.id);

    //                     if ((artistObtained.albums && albumIndex === artistObtained.albums?.length - 1) &&
    //                         albumFetched.tracks && trackIndex === albumFetched.tracks.length - 1) {

    //                         setTrackIds(trackListIdsArtist);
    //                     }
    //                 })

    //             })

    //         }



    //     }());

    // }, [])


    // useEffect(() => {
    //     //AQUÍ HACER EL ESTUDIO DE LA IGUALDAD DE LAS TRACKLISTS
    //     (async function checkTrackList() {
    //         if (trackList === null) return;
    //         if (trackIds === null) return;
    //         let coincides = true
    //         let soundPlayerIds = trackList.map((track) => track.id)
    //         if (soundPlayerIds.length === trackIds.length) {
    //             for (let i = 0; i < trackIds.length; i++) {
    //                 if (!soundPlayerIds.includes(trackIds[i])) {
    //                     coincides = false
    //                 }
    //             }
    //         } else { coincides = false }
    //         // coincides ? setBtnActive(true) : setBtnActive(false)
    //         if (coincides) {
    //             // setBtnActive(isListBtnActive);
    //             // /*
    //             // No vale porque ese contexto puede ser de otro item
    //             // Para solucionarlo, añadirle un ID al contexto que guarda
    //             // el listDetail
    //             //  */
    //         }
    //     }())
    // }, [trackIds])


    return (
        <div className="trend-item-container" onClick={handleListDetailClicked}>
            {item && item.tracks && item.tracks[0].artists && <>
                <div className="trend-item-card">
                    <img className="trend-item-card-img" src={item.imageUrl} alt={`Cover Image of ${item.name}`} />

                    <div className="trend-item-dashboard">
                        <p className="dashboard-track-title">{item.tracks[0].name}</p>

                        <p className="dashboard-track-info">
                            <FaMusic className="dashboard-music-icon" /> <span>{item.tracks[0].artists[0].name}</span> - <span>{item.tracks[0].album?.name}</span>
                        </p>

                        <span className="play-btn-container" onClick={homePagePlayClicked}>
                            {btnActive ?
                                <BiStop className="dashboard-play-icon" />
                                :
                                <BiPlay className="dashboard-play-icon" />}
                        </span>
                    </div>
                </div>
                <span className="trend-title">{item.name}</span>
            </>}
        </div>
    )
}
