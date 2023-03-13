import React, { useState } from 'react'
import {  useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

import TourDetails from '../components/tour/TourDetails'



export default function Tour() {
  const { id } = useParams()
  const [url, setUrl] = useState(`https://dry-castle-66151.herokuapp.com/api/v1/tours/${id}`)
  const { data: tour, isPending, error } = useFetch(url)
  
console.log(tour);
  console.log('is:', isPending);
  return (

    <TourDetails tour={tour} isPending={isPending} />
  )
}
