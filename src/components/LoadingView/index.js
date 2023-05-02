import Loader from 'react-loader-spinner'

import LoaderContainer from './styledComponents'

const LoadingView = () => (
  <LoaderContainer data-testid="loader">
    <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
  </LoaderContainer>
)

export default LoadingView
