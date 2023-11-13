import { useQuery } from '@tanstack/react-query'
import { Link, useParams } from 'react-router-dom'
import { getChairByMain } from '../apis/chairs'
import { Chair } from '../../models/chairs'
import SubLink from '../components/SubLink'
import { Container, Row, Col } from 'react-bootstrap'
import LoadingPage from '../components/LoadingPage'

const MainCategory = () => {
  const { mainCategory } = useParams()

  const {
    data: chairs,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['chairs', mainCategory],
    queryFn: () => getChairByMain(mainCategory as string),
  })

  if (mainCategory === undefined) {
    return <p>Please Check Main Category</p>
  }

  if (isError) return <p>Something went wrong!</p>

  if (!chairs || isLoading) return <LoadingPage/>

  return (
    <div className="main">
      <div className="thumbnail">
        <h3>{mainCategory} Chairs</h3>
        <img src={`../../${mainCategory}-main.jpg`} alt={chairs[0].name} />
        <SubLink mainCategory={mainCategory} />
      </div>

      <div className="main-category">
        <Container>
          <Row>
            {chairs.map((chair: Chair, index: number) => (
              <Col sm={12} md={6} lg={3} key={index}>
                <div className="main-category-list" key={chair.code}>
                  <Link
                    to={`/${chair.mainCategory}/${chair.subCategory}/${chair.name}`}
                  >
                    <img src={`../../${chair.code}.jpg`} alt={chair.name} />
                    <p className="main-category-list">{chair.name}</p>
                  </Link>
                  <p>{chair.subCategory} Chair</p>
                  <p>$ {chair.price}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default MainCategory
