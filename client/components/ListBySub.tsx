import { useQuery } from '@tanstack/react-query'
import { Container, Row, Col } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { getChairByMain } from '../apis/chairs'
import { Chair } from '../../models/chairs'

const ListBySub = () => {
  const { mainCategory, subCategory } = useParams()

  const {
    data: chairs,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['chairs', mainCategory],
    queryFn: () => getChairByMain(mainCategory as string),
  })

  if (isError) return <p>Something went wrong!</p>

  if (!chairs || isLoading) return <p>Loading...</p>

  const filteredChairs = chairs.filter(
    (chair: Chair) => chair.subCategory === subCategory
  )

  return (
    <div className="favorite">
      <Container>
        <Row>
          {filteredChairs.length > 0 ? (
            filteredChairs.map((chair: Chair, index: number) => (
              <Col sm={12} md={6} lg={3} key={index}>
                <Link to={`/${mainCategory}/${subCategory}/${chair.name}`}>
                  <img
                    src={`../../Public/${chair.code}.jpg`}
                    alt={chair.name}
                  />
                  <p>{chair.name.replace(/-/g, ' ')}</p>
                </Link>
                <p>${chair.price}</p>
              </Col>
            ))
          ) : (
            <Col>
              <p>No items</p>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  )
}

export default ListBySub
