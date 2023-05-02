import styled from 'styled-components'

export const GamingVideoItem = styled.li`
  width: 150px;
  margin-bottom: 50px;
  margin-right: 20px;
  @media (min-width: 576px) {
    width: 170px;
  }
  @media (min-width: 768px) {
    width: 230px;
  }
`

export const GameThumbnail = styled.img`
  width: 100%;
  border-radius: 10px;
`
export const GameName = styled.p`
  font-size: 18px;
  font-weight: 700;
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#ebebeb' : '#313131')};
  margin-top: 12px;
  margin-bottom: 0px;
`
export const GameViewers = styled.p`
  font-size: 12px;
  font-weight: 400;
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#d7dfe9' : '#383838')};
`
