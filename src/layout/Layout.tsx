
import "../index.css";
import { Outlet } from 'react-router-dom'
import { NavBar } from '../components/navbar/NavBar'
import { SoundBar } from '../components/soundBar/SoundBar'
import { UserContextProvider } from '../context/UserContextProvider'
import { TrackListContextProvider } from '../context/TrackListContextProvider'
import { ListDetailContextProvider } from '../context/ListDetailContextProvider'
import { IsPlayingContextProvider } from '../context/IsPlayingContextProvider'
import { SelectedUserContextProvider } from '../context/SelectedUserContextProvider'
import { GenreContextProvider } from '../context/GenresContext'
import { TopTrendsContextProvider } from '../context/TopTrendsContextProvider'
import { UserLibraryListContextProvider } from '../context/UserLibraryListContextProvider'
import SearchDataContextProvider from '../context/SearchDataContextProvider'
import { FilterProvider } from '../context/FilterContext'

export const Layout = () => {
  return (
    <>
      <UserContextProvider>
        <TrackListContextProvider>
          <FilterProvider>
            <ListDetailContextProvider>
              <IsPlayingContextProvider>
                <TopTrendsContextProvider>
                  <SelectedUserContextProvider>
                    <GenreContextProvider>
                      <UserLibraryListContextProvider>
                        <SearchDataContextProvider>
                          <div className='page-content'>
                            <Outlet />
                          </div>
                          <SoundBar />
                          <NavBar />
                        </SearchDataContextProvider>
                      </UserLibraryListContextProvider>
                    </GenreContextProvider>
                  </SelectedUserContextProvider>
                </TopTrendsContextProvider>
              </IsPlayingContextProvider>
            </ListDetailContextProvider>
          </FilterProvider>
        </TrackListContextProvider>
      </UserContextProvider>
    </>
  )
}
