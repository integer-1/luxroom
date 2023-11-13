import {Spinner} from 'react-bootstrap'

const LoadingPage = () => {
  return (
    <div>
      <Spinner animation="border" variant="secondary" />
      <Spinner animation="border" variant="secondary" />
      <Spinner animation="border" variant="secondary" />
      <p>Loading...</p>
    </div>
  )
}

export default LoadingPage
