import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
`

export const VideoItemDetailsContainer = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  width: 100%;
  height: 90vh;
  overflow-y: auto;
  padding: 20px 0px 20px 0px;
  @media (min-width: 768px) {
    padding: 40px;
  }
`
export const ChannelLogo = styled.img`
  width: 40px;
  margin-right: 20px;
`
export const Title = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#ebebeb' : '#313131')};
  margin: 0;
  margin-bottom: 20px;
  font-weight: 500;
  @media (min-width: 576px) {
    margin-bottom: 15px;
    font-size: 18px;
  }
`
export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  height: 25px;
  width: 100%;
  @media (min-width: 768px) {
    width: 50%;
  }
`
export const ChannelInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 8px;
  width: 100%;
  flex-wrap: wrap;
`

export const Text = styled.p`
  color: ${props => (props.isDark ? '#7e858e' : '#424242')};
  font-weight: 400;
  font-size: 14px;
  font-family: 'Roboto';
  margin: 0;
  line-height: 15px;
`

export const ChannelName = styled.p`
  color: ${props => (props.isDark ? '#cccccc' : '#212121')};
  font-weight: 500;
  font-size: 16px;
  font-family: 'Roboto';
  margin: 0;
  line-height: 15px;
  margin-bottom: 10px;
  @media (min-width: 576px) {
    width: 100%;
    margin-bottom: 15px;
  }
`
export const ChannelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 8px;
  padding: 20px 15px;
  @media (min-width: 576px) {
    margin: 0;
  }
`
export const UserActionsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`

export const ActionBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
`
export const ActionText = styled.div`
  color: ${props => props.color};
  font-size: 16px;
  font-family: 'Roboto';
  margin: 0px 20px 0px 5px;
  font-weight: 500;
`
export const Separator = styled.hr`
  border: none;
  border-top: 2px solid ${props => (props.isDark ? '#475569' : '#cccccc')};
  width: 100%;
  margin-top: 20px;
`
export const Description = styled.p`
  color: ${props => (props.isDark ? '#ebebeb' : '#313131')};
  font-weight: 400;
  font-size: 14px;
  font-family: 'Roboto';
  @media (min-width: 768px) {
    margin: 34px 60px;
  }
`
