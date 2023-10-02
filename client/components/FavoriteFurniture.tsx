/* eslint-disable jsx-a11y/alt-text */
import { Link } from 'react-router-dom'
import furnitureItems from '../../data/furnitureItems.ts'
import { Container, Row, Col } from 'react-bootstrap'

const FavoriteFurniture = () => {
  return (
    <div className='favorite'>
      <Container>
        <Row>
          {furnitureItems.map((item, index) => {
            return (
              <Col sm={12} md={6} lg={3} key={index}>
                <Link to={`../personal-projects/first/furniture/${item.name}`}>
                  <img
                    src={`../../Public/${item.code}.jpg`}
                    className="main-category"
                  />
                  <p>{item.name.replace(/-/g, ' ')}</p>
                </Link>
                <p>{item.description}</p>
                <p>${item.price}</p>
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}

export default FavoriteFurniture
