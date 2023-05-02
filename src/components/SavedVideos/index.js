import {MdPlaylistAdd} from 'react-icons/md'

import Header from '../Header'
import ThemeContext from '../../context/ThemeContext'
import SideBar from '../SideBar'
import TrendingVideoItems from '../TrendingVideoItems'

import {
  MainContainer,
  SavedVideosContainer,
  SavedVideosListContainer,
  Banner,
  LogoContainer,
  BannerText,
  NoSavedImg,
  NoSavedContainer,
  NoSavedText,
  NoSavedDesc,
} from './styledComponents'

const isSavedVideos = true

const SavedVideos = () => {
  const renderSuccessView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDark, savedVideosList} = value
        return (
          <SavedVideosContainer isDark={isDark} data-testid="savedVideos">
            {savedVideosList.length > 0 ? (
              <>
                <Banner isDark={isDark}>
                  <LogoContainer isDark={isDark}>
                    <MdPlaylistAdd color="#ff0b37" fontSize={35} />
                  </LogoContainer>
                  <BannerText isDark={isDark}>Saved Videos</BannerText>
                </Banner>
                <SavedVideosListContainer>
                  {savedVideosList.map(eachVideo => (
                    <TrendingVideoItems
                      eachVideo={eachVideo}
                      key={eachVideo.id}
                    />
                  ))}
                </SavedVideosListContainer>
              </>
            ) : (
              <>
                <NoSavedContainer>
                  <NoSavedImg
                    alt="no saved videos"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  />
                  <NoSavedText isDark={isDark}>
                    No saved videos found
                  </NoSavedText>
                  <NoSavedDesc isDark={isDark}>
                    Save your videos by clicking a button
                  </NoSavedDesc>
                </NoSavedContainer>
              </>
            )}
          </SavedVideosContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  return (
    <>
      <Header isSavedVideos={isSavedVideos} />
      <MainContainer>
        <SideBar isSavedVideos={isSavedVideos} />
        {renderSuccessView()}
      </MainContainer>
    </>
  )
}

export default SavedVideos
