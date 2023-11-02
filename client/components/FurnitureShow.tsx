/* eslint-disable jsx-a11y/alt-text */
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FurnitureItems, FurnitureDetail } from '../../models/furniture.ts'
import { getChairs, getDetail } from '../apiClient.ts'

const FurnitureShow = () => {
  const [chairs, setChairs] = useState<FurnitureItems[]>([])
  const [detail, setDetail] = useState<FurnitureDetail[]>([])
  const { name } = useParams()

  useEffect(() => {
    async function fetchData() {
      try {
        const chairsData = await getChairs()
        setChairs(chairsData)
        const detailData = await getDetail()
        setDetail(detailData)
      } catch (error) {
        console.error
      }
    }
    fetchData()
  }, [])

  const itemDescription = chairs.find((item) => item.name === name)
  const itemCode = itemDescription?.code
  const itemDetail = detail.find((item) => item.itemCode === itemCode)

  const formatText = (text?: string): string | undefined => {
    return text
      ?.replace(/-/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase())
  }

  return (
    <div>
      <h2>{formatText(itemDescription?.name)}</h2>
      <img
        className=""
        src={`../../Public/${itemCode}.jpg`}
        alt="Second slide"
      />
      <h4>Price</h4>
      <p>$ {itemDescription?.price}</p>
      <h4>Description</h4>
      <p className="item-description">{itemDetail?.description}</p>
      <h4>Detail</h4>
      <p>{itemDetail?.itemCode}</p>
    </div>
  )
}

export default FurnitureShow
