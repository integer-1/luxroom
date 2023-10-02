import { Carousel } from 'react-bootstrap'
// src="../../Public/furniture-image/main-chair1.jpg"

const FurnitureMain = () => {
  return (
    <div className="slide">
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../../Public/main-chair1.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className="text">
            <h5>White Chair</h5>
            <p>A white chair is simply a chair that is predominantly white in color.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../../Public/main-chair2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className="text">
            <h5>Black Chair</h5>
            <p>A white chair is simply a chair that is predominantly white in color.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../../Public/main-chair3.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className="text">
            <h5>Green Chair</h5>
            <p>A white chair is simply a chair that is predominantly white in color.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default FurnitureMain
