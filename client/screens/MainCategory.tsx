import { useQuery } from '@tanstack/react-query'
import { Link, useParams } from 'react-router-dom'
import { getChairByMain } from '../apis/chairs'
import { Chair } from '../../models/chairs'
import SubLink from '../components/SubLink'
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

  if (!chairs || isLoading) return <LoadingPage />

  return (
    <div className="main">
      <div className="thumbnail">
        <h3>{mainCategory} Chairs</h3>
        <img src={`../../${mainCategory}-main.jpg`} alt={chairs[0].name} />
        <SubLink mainCategory={mainCategory} />
      </div>

      <div className="main-category-list">
        {chairs.map((chair: Chair) => (
          <div className="main-category-list-box" key={chair.code}>
            <Link
              to={`/${chair.mainCategory}/${chair.subCategory}/${chair.name}`}
              state={chair}
            >
              <img src={`../../${chair.code}.jpg`} alt={chair.name} />
              <p className="main-category-list-name">{chair.name.replace(/-/g, ' ')}</p>
            </Link>
            <p className="main-category-list-sub">{chair.subCategory} Chair</p>
            <p className="main-category-list-price">$ {chair.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MainCategory
