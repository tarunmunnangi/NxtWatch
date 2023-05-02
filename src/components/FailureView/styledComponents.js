import styled from 'styled-components'

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 60px;
  padding-bottom: 60px;
`
export const FailureViewImg = styled.img`
  width: 70%;
  max-width: 300px;
`
export const FailureViewText = styled.h1`
  font-family: 'Roboto';
  font-weight: 800;
  font-size: 24px;
  color: ${props => (props.isDark ? '#f1f1f1' : '#212121')};
  margin-bottom: 12px;
  margin-top: 20px;
`
export const FailureViewDesc = styled.p`
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
