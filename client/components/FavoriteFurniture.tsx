// /* eslint-disable jsx-a11y/alt-text */
// import { Link } from 'react-router-dom'
// import { Container, Row, Col } from 'react-bootstrap'
// import { useEffect, useState } from 'react'
// import { FurnitureItems } from '../../models/furniture.ts'
// import { getChairs } from '../apiClient.ts'

// const FavoriteFurniture = () => {
//   const [chairs, setChairs] = useState<FurnitureItems | null>(null)
  

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const chairsData = await getChairs()
//         setChairs(chairsData)
//       } catch (error) {
//         console.error
//       }
//     }
//     fetchData()
//   }, [])


//   console.log(chairs)
//     if (chairs === null) return <></>

//   return (
//     <div className="favorite">
//       <Container>
//         <Row>
//           {chairs.map((item, index) => {
//             return (
//               <Col sm={12} md={6} lg={3} key={index}>
//                 <Link to={`../personal-projects/first/furniture/${item.name}`}>
//                   <img
//                     src={`../../Public/${item.code}.jpg`}
//                     className="main-category"
//                   />
//                   <p>{item.name.replace(/-/g, ' ')}</p>
//                 </Link>
//                 <p>{item.description}</p>
//                 <p>${item.price}</p>
//               </Col>
//             )
//           })}
//         </Row>
//       </Container>
//     </div>
//   )
// }

// export default FavoriteFurniture
