import { Link, useLocation } from 'react-router-dom'
interface MainCategoryProps {
  mainCategory: string
}

const subCategory = {
  Dining: ['Modern Chairs', 'Classic Chairs'],
  Comfort: ['Sofa', 'Ottoman', 'Beach Chairs'],
  Office: ['Swivel Chairs', 'Home Office'],
  Accent: ['Arm Chairs', 'Modern Accent'],
}

const SubLink: React.FC<MainCategoryProps> = ({ mainCategory }) => {
  const sub = subCategory[mainCategory as keyof typeof subCategory]
  const currentLocation = useLocation()

  return (
    <div className="sub-nav">
      {sub.map((subName, index) => (
        <Link
          key={index}
          to={`/${mainCategory}/${subName
            .replace(' Chairs', '')
            .replace(' Office', '')
            .replace(' Accent', '')}`}
          className={index === sub.length - 1 ? 'link-sub-last' : 'link-sub'}
          style={{
            color: currentLocation.pathname.includes(
              subName
                .replace(' Chairs', '')
                .replace(' Office', '')
                .replace(' Accent', '')
            )
              ? 'pink'
              : 'black',
          }}
        >
          {subName}
        </Link>
      ))}
    </div>
  )
}

export default SubLink
