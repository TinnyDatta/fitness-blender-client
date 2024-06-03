
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Reviews = () => {

        const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <>
        <div>
            <h2 className="text-[#CD5C5C] text-center my-2 text-xl">Reviews</h2>
            <p className="text-4xl text-[#8A3324] text-center">Individuals thought about us </p>
        </div>

        <section className="my-10 bg-[#fff6f6]">
            
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="flex flex-col items-center mx-24 my-16">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                           
                            <h3 className="text-3xl py-8 text-[#CD5C5C]">{review.name}</h3>
                            <p className="py-5">{review.details}</p>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
        </>
    );

};

export default Reviews;