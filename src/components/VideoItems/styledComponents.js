import styled from 'styled-components'

export const HomeVideoItem = styled.li`
  width: 100%;
  margin-bottom: 40px;
  padding-right: 24px;
  @media (min-width: 576px) {
    width: 300px;
  }
`
export const Thumbnail = styled.img`
  width: 100%;
`

export const ChannelContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 5px;
`

export const ChannelLogo = styled.img`
  width: 40px;
  margin-right: 10px;
`
export const Title = styled.p`
  font-size: 16px;
  font-weight: 800;
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#ebebeb' : '#313131')};
  margin-top: 8px;
  margin-bottom: 0px;
`
export const ChannelName = styled.p`
  font-size: 14px;
  font-weight: 900;
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#cccccc' : '#606060')};
  margin-bottom: 0px;
`

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  height: 25px;
  margin-top: 8px;
`

export const ViewsAndPublishedAtContent = styled.p`
  font-size: 14px;
  font-weight: 400;
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#7e858e' : '#383838')};
`
