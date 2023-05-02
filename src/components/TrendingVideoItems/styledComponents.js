import styled from 'styled-components'

export const VideoItem = styled.li`
  width: 100%;
  height: 280px;
  margin-bottom: 50px;
  margin-right: 15px;
  @media (min-width: 576px) {
    display: flex;
    align-items: flex-start;
    padding-left: 20px;
  }
  @media (min-width: 768px) {
    margin-bottom: 40px;
    height: 100%;
  }
`

export const Thumbnail = styled.img`
  width: 100%;
  height: 180px;
  @media (min-width: 576px) {
    max-width: 350px;
    margin-right: 16px;
  }
`
export const Title = styled.p`
  font-size: 16px;
  font-weight: 800;
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#ebebeb' : '#313131')};
  margin-top: 8px;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`
export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  height: 25px;
`

export const ChannelLogo = styled.img`
  width: 40px;
  margin-right: 10px;
  margin-left: 10px;
  @media (min-width: 576px) {
    display: none;
  }
`

export const ChannelInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  width: 100%;
  flex-wrap: wrap;
`

export const Text = styled.p`
  font-size: 14px;
  font-weight: 400;
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#7e858e' : '#383838')};
  margin: 0;
`

export const ChannelName = styled.p`
  font-size: 14px;
  font-weight: 900;
  font-family: 'Roboto';
  color: ${props => (props.isDarkTheme ? '#cccccc' : '#606060')};
  margin: 0;
  @media (min-width: 576px) {
    width: 100%;
    margin-bottom: 15px;
    font-size: 16px;
  }
`
export const ChannelContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 8px;
  @media (min-width: 576px) {
    margin: 0;
  }
`
