import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { FurnitureItems } from '../../models/chairs.ts'
import { getChairs } from '../apiClient.ts'
import chairs from '../../server/db/data/chairs.js'
import { useQuery } from '@tanstack/react-query'

const LatestStyles = () => {
  // const {data: chairs, isLoading, isError} = useQuery(['chairs'], getChairs)

  // if (isError) {
  //   return (
  //     <>
  //       <p>Something went wrong!</p>
  //     </>
  //   )
  // }

  // if (!chairs || isLoading) {
  //   return <p>...loading</p>
  // }
  return (
    <div>
      <h3>Shop Our Latest Styles</h3>
      {/* <Container>
        <Row>
          {chairs.map((item, index) => {
            return (
              <Col sm={12} md={6} lg={3} key={index}>
                <Link to={`../personal-projects/first/furniture/${item.name}`}>
                  <img
                    src={`../../Public/${item.code}.jpg`}
                    className="main-category"
                  />
                  <p>{item.name.replace(/-/g, ' ')}</p>
                </Link>
                <p>{item.description}</p>
                <p>${item.price}</p>
              </Col>
            )
          })}
        </Row>
      </Container> */}
    </div>
  )
}

export default LatestStyles
