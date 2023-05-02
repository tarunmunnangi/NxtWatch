import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
`
export const HomeContainer = styled.div`
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  height: 90vh;
  overflow-y: auto;
  width: 100%;
  @media (min-width: 768px) {
    width: 80vw;
  }
`
export const Banner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
`
export const BannerTextContainer = styled.div`
  max-width: 360px;
  padding-left: 40px;
`
export const WebsiteLogo = styled.img`
  width: 140px;
`

export const BannerText = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #424242;
  font-family: 'Roboto';
  margin-top: 24px;
`
export const BannerBtn = styled.button`
  background-color: #3b82f6;
  color: #f1f5f9;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 14px;
  height: 36px;
  width: 130px;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 8px 16px 8px 16px;
  margin-top: 10px;
`

export const CloseButton = styled.button`
  cursor: pointer;
  outline: none;
  background-color: transparent;
  border: none;
  align-self: flex-end;
  margin-right: 18px;
  margin-top: 32px;
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`

export const SearchInput = styled.input`
  height: 40px;
  border: 1px solid ${props => (props.isDark ? '#606060' : '#cccccc')};
  border-right: none;
  outline: none;
  padding: 10px;
  width: 100%;
  max-width: 400px;
  background-color: transparent;
  font-size: 16px;
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#f9f9f9' : '#313131')};
`
export const SearchBtn = styled.button`
  height: 40px;
  width: 70px;
  border: 1px solid ${props => (props.isDark ? '#606060' : '#cccccc')};
  background-color: ${props => (props.isDark ? '#313131' : '#f9f9f9')};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
export const VideosContainer = styled.ul`
  padding: 0;
  list-style: none;
  margin: 0;
  margin-left: 20px;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
`
export const NoVideosContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 60px;
  padding-bottom: 60px;
`
export const NoVideosImg = styled.img`
  width: 70%;
  max-width: 300px;
`
export const NoVideosText = styled.h1`
  font-family: 'Roboto';
  font-weight: 800;
  font-size: 24px;
  color: ${props => (props.isDark ? '#f1f1f1' : '#212121')};
  margin-bottom: 12px;
  margin-top: 20px;
`
export const NoVideosDesc = styled.p`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 16px;
  color: ${props => (props.isDark ? '#cbd5e1' : '#424242')};
`
export const RetryBtn = styled.button`
  height: 36px;
  width: 85px;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 700;
  color: #ebebeb;
  background-color: #4f46e5;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  margin-top: 12px;
`
