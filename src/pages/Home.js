import React, { useState } from 'react'
import Loader from '../components/loader/Loader'
import TourCard from '../components/tour/TourCard'
import { useFetch } from '../hooks/useFetch'

function Home() {
    const [url, setUrl] = useState('https://dry-castle-66151.herokuapp.com/api/v1/tours')
    const { data: tours, isPending, error } = useFetch(url)
    console.log(tours);
    let tourList
    if (tours) {
        tourList = tours.data.doc.map(tour => (
            <TourCard key={tour._id} tour={tour} />
        ))
    }
    return (
        <>
            {isPending && <Loader />}
            {error && <Loader />}
            {tours &&
                <main className="main">
                    <div className="card-container">
                        {tourList}
                    </div>
                </main>
            }
        </>
    )
}

export default Home
