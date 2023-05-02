import styled from 'styled-components'

export const SideBarContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
    height: 90vh;
    max-width: 260px;
  }
`
export const Footer = styled.div`
  padding: 25px;
`
export const LogosContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`

export const Logos = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`
export const FooterText = styled.p`
  font-size: 18px;
  font-weight: bold;
  font-family: 'Roboto';
  color: ${props => (props.isDark ? ' #f1f1f1' : '#231f20')};
`
export const FooterDescription = styled.p`
  font-size: 16px;
  font-weight: 800;
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#cbd5e1' : '#424242')};
  margin-top: 20px;
`
