import { useQuery } from '@tanstack/react-query'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getChairByMain } from '../apis/chairs'
import { Chair } from '../../models/chairs'
import LoadingPage from './LoadingPage'

interface CategoryProps {
  mainCategory: string
  subCategory: string
}

const ListBySub: React.FC<CategoryProps> = ({ mainCategory, subCategory }) => {
  const {
    data: chairs,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['chairs', mainCategory],
    queryFn: () => getChairByMain(mainCategory as string),
  })

  if (isError) return <p>Something went wrong!</p>

  if (!chairs || isLoading) return <LoadingPage />

  const filteredChairs = chairs.filter(
    (chair: Chair) => chair.subCategory === subCategory
  )

  return (
    <div className="sub-category-list">
      {filteredChairs.length > 0 ? (
        filteredChairs.map((chair: Chair) => (
          <div className="sub-category-list-box" key={chair.code}>
            <Link
              to={`/${chair.mainCategory}/${chair.subCategory}/${chair.name}`}
              state={chair}
            >
              <img src={`../../Public/${chair.code}.jpg`} alt={chair.name} />
              <p className="sub-category-list-name">{chair.name.replace(/-/g, ' ')}</p>
            </Link>
            <p className="sub-category-list-price">${chair.price}</p>
          </div>
        ))
      ) : (
        <p>No items</p>
      )}
    </div>
  )
}

export default ListBySub
