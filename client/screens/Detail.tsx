import { useQuery } from '@tanstack/react-query'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import { getChairsDetail } from '../apis/chairs'
import LoadingPage from '../components/LoadingPage'
import { ChairDetail } from '../../models/chairs'
import AddCart from '../components/AddCart'

const Detail = () => {
  const { state } = useLocation()

  const {
    data: detail,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['detail'],
    queryFn: () => getChairsDetail(),
  })

  if (isError) {
    return (
      <>
        <p>Something went wrong!</p>
      </>
    )
  }

  if (!detail || isLoading) return <LoadingPage />

  const itemDetail = detail?.filter(
    (item: ChairDetail) => item.item_code === state.code
  )
  const foundDetail = itemDetail[0]

  return (
    <div className="detail-container">
      <div className="link-container">
        <Link to="/" className="home-link">
          Home
        </Link>
        <p>&gt;</p>
        <Link to={`/${state.mainCategory}`} className="main-link">
          {state.mainCategory}
        </Link>
        <p>&gt;</p>
        <Link
          to={`/${state.mainCategory}/${state.subCategory}`}
          className="sub-link"
        >
          {state.subCategory}
        </Link>
      </div>
      <div className="item-container">
        <div className="image-container">
          <img src={`../../${state.code}.jpg`} alt={state.name} />
        </div>
        <div className="item-header">
          <h3>{state.name.replace(/-/g, ' ')}</h3>
          <h5>$ {state.price}</h5>
          <hr></hr>

          <p>{state.description}</p>
          {/* <AddCart itemCode={state.code} /> */}
        </div>
        <hr></hr>
        <div className="item-detail">
          <h3 className="block-heading">Product Detail</h3>
          <div className="block-one">
            <p className="detail-heading">Measurements</p>
            <p className="detail-content">
              W {foundDetail.width} X D {foundDetail.depth} X H
              {foundDetail.height}
            </p>
            <p className="detail-heading">Frame Type</p>
            <p className="detail-content">{foundDetail.frameType}</p>
            <p className="detail-heading">color</p>
            <p className="detail-content">{foundDetail.color}</p>
          </div>
          <div className="block-two">
            <p className="detail-heading">Key Features</p>
            <p className="detail-content">{foundDetail.feature_1}</p>
            <p className="detail-content">{foundDetail.feature_2}</p>
            <p className="detail-content">{foundDetail.feature_3}</p>
            <p className="detail-heading">More Description</p>
            <p className="detail-content">{foundDetail.detail}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
