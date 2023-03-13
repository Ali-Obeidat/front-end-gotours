import React from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa'

//! CSS styles
import './review.css'

export default function Review({ reviews }) {
    return (
        <section className="section-reviews" >
            <div className="reviews">
                {reviews.map((review) => (
                    <div className="reviews__card" key={review._id}>
                        <div className="reviews__avatar">
                            <img src={`https://dry-castle-66151.herokuapp.com/img/users/${review.user.photo}`} alt="Jim Brown" className="reviews__avatar-img" />
                            <h6 className="reviews__user">{review.user.name}</h6>
                        </div>
                        <p className="reviews__text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                            dignissimos sint quo commodi corrupti accusantium veniam saepe
                            numquam.
                        </p>
                        <div className="reviews__rating">
                            <svg className="reviews__star reviews__star--active">
                                <FaStar />
                            </svg>
                            <svg className="reviews__star reviews__star--active">
                                <FaStar />
                            </svg>
                            <svg className="reviews__star reviews__star--active">
                                <FaRegStar />
                            </svg>
                            <svg className="reviews__star reviews__star--active">
                                <FaRegStar />
                            </svg>
                            <svg className="reviews__star reviews__star--active">
                                <FaRegStar />
                            </svg>
                        </div>
                    </div>

                ))}
            </div>

        </section>
    )
}
