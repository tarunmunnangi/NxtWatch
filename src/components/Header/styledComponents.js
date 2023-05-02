import styled from 'styled-components'

export const Navbar = styled.nav`
  background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  padding: 0px 15px 0px 15px;
  @media (min-width: 768px) {
    padding: 0px 60px 0px 60px;
  }
`

export const WebsiteLogo = styled.img`
  width: 120px;
  align-self: center;
`

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  @media (min-width: 768px) {
    width: 200px;
  }
`
export const LogoutBtn = styled.button`
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    padding: 0px 18px 0px 18px;
    border: 1px solid ${props => (props.isDark ? '#f8f8f8' : '#3b82f6')};
    background-color: transparent;
    border-radius: 2px;
  }
`
export const ProfileImg = styled.img`
  display: none;
  @media (min-width: 768px) {
    display: block;
    width: 32px;
  }
`
export const PopupContainer = styled.div`
  background-color: ${props => (props.isDark ? '#212121' : '#f9f9f9')};
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    display: none;
  }
`
export const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
`
export const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  align-self: flex-end;
`

export const ThemeBtn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`
export const LogoutPopupContainer = styled.div`
  background-color: ${props => (props.isDark ? '#212121' : '#f8fafc')};
  height: 150px;
  width: 320px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: ${props => (props.isDark ? null : '0px 0px 8px 1px #475569')};
`

export const LogoutText = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 600;
  color: ${props => (props.isDark ? '#d7dfe9' : '#383838')};
  margin-bottom: 30px;
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const PopupBtn = styled.button`
  cursor: pointer;
  outline: none;
  height: 34px;
  width: 80px;
  background-color: ${props => (props.cancel ? '#cccccc' : ' #3b82f6')};
  color: ${props => (props.cancel ? '#313131' : '#ffffff')};
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  padding: 8px 10px 8px 12px;
  margin-right: 15px;
  margin-left: 10px;
`

export const LogoutBtnText = styled.p`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    font-size: 15px;
    color: ${props => (props.isDark ? '#f8f8f8' : '#3b82f6')};
    font-family: 'Roboto';
    font-size: 14px;
    font-weight: 800;
    font-weight: 600;
    margin: 0;
  }
`
