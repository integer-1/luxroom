import FavoriteFurniture from '../components/FavoriteFurniture.tsx'
import FurnitureMain from '../components/FurnitureMain.tsx'
// import FurnitureNav from '../components/FurnitureNav.tsx'

const Home = () => {
  return (
    <div className="furniture-view">
      <div className="line"></div>
      {/* <FurnitureNav /> */}
      <FurnitureMain />
      {/* <FavoriteFurniture /> */}
    </div>
  )
}

export default Home
