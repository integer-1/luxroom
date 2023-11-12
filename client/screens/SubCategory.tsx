import { useParams } from 'react-router-dom'
import SubLink from '../components/SubLink'
import ListBySub from '../components/ListBySub'

const SubCategory = () => {
  const { mainCategory, subCategory } = useParams()

  if (mainCategory === undefined || subCategory === undefined) {
    return <p>Please Check Category</p>
  }

  return (
    <div className="sub">
      <h2>{mainCategory} Chairs</h2>

      <SubLink mainCategory={mainCategory} />
      <ListBySub mainCategory={mainCategory} subCategory={subCategory} />
    </div>
  )
}

export default SubCategory
