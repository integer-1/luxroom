import { useQuery } from '@tanstack/react-query'
import { getLatestChairs } from '../apis/chairs.ts'
import { Chair } from '../../models/chairs.ts'
import { Link } from 'react-router-dom'
import LoadingPage from './LoadingPage.tsx'
import {
  Container,
  Row,
  Col,
  // Button,
  // OverlayTrigger,
  // Tooltip,
} from 'react-bootstrap'

const LatestStyles = () => {
  const {
    data: chairs,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['chairs'],
    queryFn: () => getLatestChairs(),
  })

  if (isError) {
    return (
      <>
        <p>Something went wrong!</p>
      </>
    )
  }

  if (!chairs || isLoading) return <LoadingPage />


  return (
    <div className="favorite">
      <h3>Shop Our Latest Styles</h3>
      <Container>
        <Row>
          {chairs.map((chair: Chair, index: number) => {
            return (
              <Col sm={3} md={3} lg={3} key={index}>
                <Link
                  to={`/${chair.mainCategory}/${chair.subCategory}/${chair.name}`}
                >
                  <img
                    src={`../../Public/${chair.code}.jpg`}
                    alt={chair.name}
                  />
                </Link>
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}

export default LatestStyles
