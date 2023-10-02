/* eslint-disable jsx-a11y/alt-text */
import furnitureItems from '../../data/furnitureItems.ts'
import furnitureDetail from '../../data/furnitureDetail.ts'
import { useParams } from 'react-router-dom'
import FurnitureNav from './FurnitureNav.tsx'

const FurnitureShow = () => {
  const { name } = useParams()

  const itemDescription = furnitureItems.find((item) => item.name === name)
  const itemCode = itemDescription?.code
  const itemDetail = furnitureDetail.find((item) => item.itemCode === itemCode)

  const formatText = (text?: string): string | undefined => {
    return text
      ?.replace(/-/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase())
  }

  return (
    <div>
      <p>First Personal Project</p>
      <FurnitureNav />
      <div>
        <h2>{formatText(itemDescription?.name)}</h2>
        <img
          className=""
          src={`../../Public/${itemCode}.jpg`}
          alt="Second slide"
        />
        {/* <p className="item-link">
          <Link to={'../dining-room'}>
            {formatText(itemDescription?.mainCategory)}
          </Link>
          &gt; <Link to={'../'}>{itemDescription?.SubCategory}</Link>
        </p> */}
        <h4>Price</h4>
        <p>$ {itemDescription?.price}</p>
        <h4>Description</h4>
        <p className="item-description">{itemDetail?.description}</p>
        <h4>Detail</h4>
        {/* <ItemDetail
          itemCode={itemDetail?.itemCode}
          height={itemDetail?.height}
          depth={itemDetail?.depth}
          width={itemDetail?.width}
          frameType={itemDetail?.frameType}
          color={itemDetail?.color}
          description={itemDetail?.description}
          etc={itemDetail?.etc}
        /> */}
      </div>
    </div>
  )
}

export default FurnitureShow
