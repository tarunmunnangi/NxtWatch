import {Component} from 'react'
import Cookies from 'js-cookie'
import {BsDot} from 'react-icons/bs'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {MdPlaylistAdd} from 'react-icons/md'

import ReactPlayer from 'react-player'
import Header from '../Header'
import SideBar from '../SideBar'
import ThemeContext from '../../context/ThemeContext'

import {
  MainContainer,
  VideoItemDetailsContainer,
  ChannelLogo,
  Title,
  Text,
  TextContainer,
  ChannelContainer,
  ChannelInfo,
  ChannelName,
  UserActionsContainer,
  ActionBtn,
  ActionText,
  Separator,
  Description,
} from './styledComponents'
import FailureView from '../FailureView'
import LoadingView from '../LoadingView'

const renderConstraints = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class VideoItemDetails extends Component {
  state = {
    renderStatus: renderConstraints.initial,
    videoDetails: {},
    likeStatus: false,
    dislikeStatus: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({renderStatus: renderConstraints.loading})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const videoDetailsApi = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }
    const response = await fetch(videoDetailsApi, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = {
        id: data.video_details.id,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
        videoUrl: data.video_details.video_url,
      }
      this.setState({
        renderStatus: renderConstraints.success,
        videoDetails: updatedData,
      })
    } else {
      this.setState({renderStatus: renderConstraints.failure})
    }
  }

  retryApi = () => {
    this.getVideoDetails()
  }

  renderFailureView = () => <FailureView retryApi={this.retryApi} />

  renderLoaderView = () => <LoadingView />

  renderSuccessView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDark, savedVideosList, savedVideos} = value

        const {videoDetails, likeStatus, dislikeStatus} = this.state

        const onLike = () => {
          this.setState(prevState => ({
            likeStatus: !prevState.likeStatus,
            dislikeStatus: false,
          }))
        }

        const onDislike = () => {
          this.setState(prevState => ({
            dislikeStatus: !prevState.dislikeStatus,
            likeStatus: false,
          }))
        }

        const onSavedVideo = () => {
          savedVideos(videoDetails)
        }

        const {
          title,
          videoUrl,
          channel,
          viewCount,
          publishedAt,
          description,
        } = videoDetails

        const checkSavedVideo = savedVideosList.find(eachVideoDetails => {
          if (eachVideoDetails.id === videoDetails.id) {
            return true
          }
          return false
        })

        const isSavedVideo = checkSavedVideo !== undefined

        return (
          <>
            <ReactPlayer width="100%" height="70vh" url={videoUrl} controls/>
            <ChannelContainer>
              <Title isDark={isDark}>{title}</Title>
              <ChannelInfo>
                <TextContainer>
                  <Text isDark={isDark}>{viewCount} views</Text>
                  <BsDot fontSize={20} color="#475569" />
                  <Text isDark={isDark}> {publishedAt} </Text>
                </TextContainer>
                <UserActionsContainer>
                  <ActionBtn onClick={onLike} type="button">
                    <AiOutlineLike
                      color={likeStatus ? '#2563eb' : '#64748b'}
                      fontSize={24}
                    />
                    <ActionText
                      color={likeStatus ? '#2563eb' : '#64748b'}
                      likeStatus={likeStatus}
                    >
                      Like
                    </ActionText>
                  </ActionBtn>
                  <ActionBtn onClick={onDislike} type="button">
                    <AiOutlineDislike
                      fontSize={24}
                      color={dislikeStatus ? '#2563eb' : '#64748b'}
                    />
                    <ActionText
                      color={dislikeStatus ? '#2563eb' : '#64748b'}
                      dislikeStatus={dislikeStatus}
                    >
                      Dislike
                    </ActionText>
                  </ActionBtn>
                  <ActionBtn onClick={onSavedVideo} type="button">
                    <MdPlaylistAdd
                      fontSize={24}
                      color={isSavedVideo ? '#2563eb' : '#64748b'}
                    />
                    <ActionText color={isSavedVideo ? '#2563eb' : '#64748b'}>
                      {isSavedVideo ? 'Saved' : 'Save'}
                    </ActionText>
                  </ActionBtn>
                </UserActionsContainer>
              </ChannelInfo>
              <Separator isDark={isDark} />
              <UserActionsContainer>
                <ChannelLogo alt="channel logo" src={channel.profileImageUrl} />
                <div>
                  <ChannelName isDark={isDark}>{channel.name}</ChannelName>
                  <Text isDark={isDark}>
                    {channel.subscriberCount} subscribers
                  </Text>
                </div>
              </UserActionsContainer>
              <Description isDark={isDark}>{description}</Description>
            </ChannelContainer>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderSwitchCases = () => {
    const {renderStatus} = this.state
    switch (renderStatus) {
      case renderConstraints.success:
        return this.renderSuccessView()
      case renderConstraints.failure:
        return this.renderFailureView()
      case renderConstraints.loading:
        return this.renderLoaderView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <>
              <Header />
              <MainContainer>
                <SideBar />
                <VideoItemDetailsContainer
                  isDark={isDark}
                  data-testid="videoItemDetails"
                >
                  {this.renderSwitchCases()}
                </VideoItemDetailsContainer>
              </MainContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
