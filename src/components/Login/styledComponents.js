import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 15px;
`
export const LoginContainer = styled.div`
  background-color: ${props => (props.isDark ? '#000000' : '#ffffff')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 400px;
  min-height: 400px;
  border-radius: 10px;
  padding: 45px 15px 45px 15px;
  box-shadow: ${props => (props.isDark ? null : '0px 0px 16px 2px #cbd5e1')};
  @media (min-width: 768px) {
    padding: 45px;
    height: 430px;
  }
`

export const WebsiteLogo = styled.img`
  width: 120px;
  align-self: center;
  @media (min-width: 768px) {
    width: 160px;
  }
`
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`
export const Label = styled.label`
  color: ${props => (props.isDark ? '#cccccc' : '#7e858e')};
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-bottom: 5px;
  margin-top: 15px;
`
export const UserInput = styled.input`
  color: ${props => (props.isDark ? '#f8fafc' : null)};
  height: 40px;
  border-radius: 4px;
  outline: none;
  padding-left: 10px;
  background-color: transparent;
  border: 1px solid ${props => (props.isDark ? '#00306e' : '#606060')};
  font-family: 'Roboto';
  font-size: 14px;
  margin-bottom: 10px;
`
export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: center;
`
export const CheckboxInput = styled.input`
  height: 15px;
  width: 15px;
`

export const CheckboxLabel = styled.label`
  color: ${props => (props.isDark ? '#ebebeb' : '#383838')};
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  margin-left: 5px;
`
export const LoginBtn = styled.button`
  height: 40px;
  background-color: #3b82f6;
  color: #ffffff;
  border-radius: 8px;
  cursor: pointer;
  outline: none;
  border: none;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 700;
  margin-top: 24px;
`
export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  font-weight: 300;
  font-size: 12px;
  color: #ff0000;
  margin-top: 12px;
`
