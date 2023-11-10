import React from 'react'
import { useParams } from 'react-router-dom'
import SubLink from '../components/SubLink'
import ListBySub from '../components/ListBySub'

const SubCategory = () => {
  const { mainCategory, subCategory } = useParams()

  return (
    <div className="sub">
      <h2>{mainCategory} Chairs</h2>

      <SubLink />
      <ListBySub />
    </div>
  )
}

export default SubCategory
