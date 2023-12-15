import { useQuery } from '@tanstack/react-query'
import { getLatestChairs } from '../apis/chairs.ts'
import { Chair } from '../../models/chairs.ts'
import { Link } from 'react-router-dom'
import LoadingPage from './LoadingPage.tsx'

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

  const latestChairs = chairs.slice(0, 4)

  return (
    <div className="latest">
      <h4>Shop Our Latest Styles</h4>
      <div className="latest-img-box">
        {latestChairs.map((chair: Chair, index: number) => {
          return (
            <Link
              key={index}
              to={`/${chair.mainCategory}/${chair.subCategory}/${chair.name}`}
              state={chair}
            >
              <div className="image-wrapper">
                <img src={`../${chair.code}.jpg`} alt={chair.name} />
                <div className="overlay">
                  <p>{chair.name.replace(/-/g, ' ')}</p>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default LatestStyles
