import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
`
export const GamingContainer = styled.div`
  height: 90vh;
  overflow-y: auto;
  width: 100%;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`
export const GamingVideosContainer = styled.ul`
  padding-left: 20px;
  list-style: none;
  width: 100%;
  padding-top: 20px;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  @media (min-width: 576px) {
    padding-left: 40px;
  }
`
