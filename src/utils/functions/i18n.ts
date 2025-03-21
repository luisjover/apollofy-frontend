import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        lng: 'en',
        fallbackLng: 'es',
        interpolation: {
            escapeValue: false
        },
        resources: {
            en: {
                translation: {
                    english: 'English',
                    spanish: 'Spanish',
                    logIn: 'Log In',
                    search: 'Search',
                    topArtists: 'Top Artists',
                    topAlbums: 'Top Albums',
                    logOut: 'Log Out',
                    language: 'Language',
                    notifications: 'Notifications',
                    topGenres: 'Your Top Genres',
                    searchbarText: 'What do you want to listen to?',
                    searchbarMessage: 'Listen to anything... anywhere you want.',
                    allSearch: 'All',
                    tracksSearch: 'Tracks',
                    artistsSearch: 'Artists',
                    albumsSearch: 'Albums',
                    playlistsSearch: 'Playlists',
                    addTrack: 'add your track!',
                    selectTrackImage: "Select your track's image",
                    selectTrack: 'Select your track',
                    songName: "Your song's name...",
                    songGenre: 'Select a genre for your song.',
                    trackPrivacyText: 'Privacity',
                    trackPrivacityPrivate: 'Private',
                    trackPrivacityPublic: 'Public',
                    upload: 'Upload',
                    yourLibrary: 'Your library',
                    artistType: 'artist',
                    playlistType: 'playlist',
                    albumType: 'album',
                    trackType: 'track',
                    followersProfile: 'Followers',
                    followingProfile: 'Following',
                    myMusicProfile: 'Music of',
                    searchMySong: 'Search my song...',
                    userSearch: 'Users',
                    image: 'Add cover',
                    track: 'Add track',
                    selectALbum: 'Select album',
                    newAlbum: 'New album',
                    addNewAlbum: 'Album name'
                }
            },
            es: {
                translation: {
                    english: 'Inglés',
                    spanish: 'Español',
                    logIn: 'Identifíquese',
                    search: 'Búsqueda',
                    topArtists: 'Top Artistas',
                    topAlbums: 'Top Álbumes',
                    logOut: 'Cerrar Sesión',
                    language: 'Idioma',
                    notifications: 'Notificaciones',
                    topGenres: 'Tus Top Géneros',
                    searchbarText: '¿Qué quieres escuchar?',
                    searchbarMessage: 'Escucha lo que quieras... donde quieras.',
                    allSearch: 'Todo',
                    tracksSearch: 'Canciones',
                    artistsSearch: 'Artistas',
                    albumsSearch: 'Álbumes',
                    playlistsSearch: 'Playlists',
                    addTrack: '¡Añade tu canción!',
                    selectTrackImage: "Elige la imagen de tu canción",
                    selectTrack: 'Elige tu canción',
                    songName: "Nombre de tu canción...",
                    songGenre: 'Elige un género para tu canción',
                    trackPrivacyText: 'Privacidad',
                    trackPrivacityPrivate: 'Privado',
                    trackPrivacityPublic: 'Público',
                    upload: 'Subir',
                    yourLibrary: 'Tu librería',
                    artistType: 'artista',
                    playlistType: 'playlist',
                    albumType: 'álbum',
                    trackType: 'canción',
                    followersProfile: 'Seguidores',
                    followingProfile: 'Seguidos',
                    myMusicProfile: 'Música de',
                    searchMySong: 'Buscar mi canción...',
                    userSearch: 'Usuarios',
                    image: 'Portada',
                    track: 'Canción',
                    selectALbum: 'Selecciona album',
                    newAlbum: 'Nuevo album',
                    addNewAlbum: 'Nombre del album'
                }
            }
        }
    });

export default i18n;
