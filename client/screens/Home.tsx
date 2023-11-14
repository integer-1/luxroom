import AboutUs from '../components/AboutUs.tsx'
import HomeSlide from '../components/HomeSlide.tsx'
import LatestStyles from '../components/LatestStyles.tsx'

const Home = () => {
  return (
    <div className="furniture-view">
      <div className="line"></div>
      <HomeSlide />
      <LatestStyles/>
      <AboutUs/>
    </div>
  )
}

export default Home
