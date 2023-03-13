import React, { useState } from 'react'
import {  useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

import TourDetails from '../components/tour/TourDetails'



export default function Tour() {
  const { id } = useParams()
  const { data: tour, isPending, error } = useFetch(`https://dry-castle-66151.herokuapp.com/api/v1/tours/${id}`)
  
  return (

    <TourDetails tour={tour} isPending={isPending} error={error} />
  )
}
