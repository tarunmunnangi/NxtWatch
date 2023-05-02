import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
`

export const NotFoundContainer = styled.div`
  width: 100%;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`
export const NotFoundImg = styled.img`
  width: 100%;
  max-width: 400px;
`
export const NotFoundText = styled.h1`
  color: ${props => (props.isDark ? '#f1f1f1' : '#212121')};
  font-size: 28px;
  font-family: 'Roboto';
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 8px;
`
export const NotFoundDesc = styled.p`
  color: ${props => (props.isDark ? '#cbd5e1' : '#424242')};
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 500;
`
