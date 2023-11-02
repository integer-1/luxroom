import { useQuery } from "@tanstack/react-query"
import FavoriteFurniture from "./components/FavoriteFurniture"
import FurnitureMain from "./components/FurnitureMain"
import { getChairs } from "./apiClient"
import LatestStyles from "./components/LatestStyles"

function App() {


  return (
    <>
      <div className="furniture-view">
      <FurnitureMain />
      <LatestStyles/>
      {/* <FavoriteFurniture /> */}

      </div>
    </>
  )
}

export default App
