import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'

import ThemeContext from '../../context/ThemeContext'

import {
  Thumbnail,
  VideoItem,
  Title,
  Text,
  TextContainer,
  ChannelContainer,
  ChannelLogo,
  ChannelInfo,
  ChannelName,
} from './styledComponents'

import './index.css'

const TrendingVideoItems = props => {
  const {eachVideo} = props
  const {thumbnailUrl, title, channel, viewCount, publishedAt, id} = eachVideo

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <Link className="link" to={`videos/${id}`}>
            <VideoItem>
              <Thumbnail alt="video thumbnail" src={thumbnailUrl} />
              <ChannelContainer>
                <ChannelLogo alt="channel logo" src={channel.profileImageUrl} />
                <div>
                  <Title isDark={isDark}>{title}</Title>
                  <ChannelInfo>
                    <ChannelName isDark={isDark}>{channel.name}</ChannelName>
                    <BsDot className="show" fontSize={20} color="#475569" />
                    <TextContainer>
                      <Text isDark={isDark}>{viewCount} views</Text>
                      <BsDot fontSize={20} color="#475569" />
                      <Text isDark={isDark}>{publishedAt}</Text>
                    </TextContainer>
                  </ChannelInfo>
                </div>
              </ChannelContainer>
            </VideoItem>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default TrendingVideoItems
