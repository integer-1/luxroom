import { Link } from 'react-router-dom'
import { ConeIcon } from '../Icon'
import Map from './../Map'

const Location = () => {
  return (
    <div className="shipping-info">
      <h3>Location</h3>
      <ConeIcon />
      Under construction
      <ConeIcon />
      <Map />
      <Link
        to="https://www.google.com/maps/place/3+Rose+Garden+Lane,+Albany,+Auckland+0632/@-36.7252427,174.7071504,20.61z/data=!4m6!3m5!1s0x6d0d3b3654d18839:0x790d2e7b8ce4c426!8m2!3d-36.725135!4d174.7070807!16s%2Fg%2F11ly222n7p?authuser=0&entry=ttu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <strong>ALBANY</strong>
      </Link>
      <p>
        3 Rose Garden Lane, Albany, Auckland 0632
        <br />
        Open 7 days
        <br />
        10:00 am - 6:00 pm
      </p>
    </div>
  )
}

export default Location
