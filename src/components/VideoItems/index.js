import {Link} from 'react-router-dom'

import {BsDot} from 'react-icons/bs'

import ThemeContext from '../../context/ThemeContext'

import {
  Thumbnail,
  HomeVideoItem,
  ChannelLogo,
  Title,
  ChannelName,
  TextContainer,
  ChannelContainer,
  ViewsAndPublishedAtContent,
} from './styledComponents'

const VideoItems = props => {
  const {eachVideo} = props
  const {thumbnailUrl, title, channel, viewCount, publishedAt, id} = eachVideo

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <Link className="link" to={`/videos/${id}`}>
            <HomeVideoItem>
              <Thumbnail alt="video thumbnail" src={thumbnailUrl} />
              <ChannelContainer>
                <ChannelLogo alt="channel logo" src={channel.profileImageUrl} />
                <div>
                  <Title isDark={isDark}>{title}</Title>
                  <ChannelName isDark={isDark}>{channel.name}</ChannelName>
                  <TextContainer>
                    <ViewsAndPublishedAtContent isDark={isDark}>
                      {viewCount} views
                    </ViewsAndPublishedAtContent>
                    <BsDot fontSize={20} color="#475569" />
                    <ViewsAndPublishedAtContent isDark={isDark}>
                      {publishedAt}
                    </ViewsAndPublishedAtContent>
                  </TextContainer>
                </div>
              </ChannelContainer>
            </HomeVideoItem>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default VideoItems
