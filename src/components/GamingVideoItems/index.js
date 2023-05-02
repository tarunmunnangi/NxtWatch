import {Link} from 'react-router-dom'
import {
  GameThumbnail,
  GamingVideoItem,
  GameName,
  GameViewers,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

const GamingVideoItems = props => {
  const {eachVideo} = props
  const {title, thumbnailUrl, viewCount, id} = eachVideo
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <Link to={`/videos/${id}`} className="link">
            <GamingVideoItem>
              <GameThumbnail alt="video thumbnail" src={thumbnailUrl} />
              <GameName isDark={isDark}>{title}</GameName>
              <GameViewers isDark={isDark}>
                {viewCount} Watching Worldwide
              </GameViewers>
            </GamingVideoItem>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GamingVideoItems
