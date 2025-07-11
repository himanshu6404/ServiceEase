import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar, FaRegStar } from "react-icons/fa";

import cust1 from '../assets/cust1.jpg';
import cust2 from '../assets/cust2.jpg';
import cust3 from '../assets/cust3.jpg';

const testimonials = [
  {
    name: "Jane Doe",
    image: cust2,
    description:
      "Had a leaking tap and got it fixed the same day thanks to ServiceEase. The plumber was polite, skilled, and super professional. From booking to payment, everything was handled online. No calls, no hassles. Really impressed with the entire flow!",
    rating: 5,
  },
  {
    name: "John Smith",
    image: cust3,
    description:
      "Used ServiceEase to clean my kitchen before Diwali — smooth process, excellent service! The guy arrived on time and did a great job. I'm definitely going to use it again.",
    rating: 4,
  },
  {
    name: "Emily Stokes",
    image: cust1,
    description:
      "Booked deep cleaning service and the team was super responsive. Loved how neat and quick everything was. Highly recommend their chat assistant too!",
    rating: 5,
  },
  {
    name: "Riya Mehra",
    image: cust1,
    description:
      "Got my living room painted through ServiceEase and the experience was fantastic. The painter was neat, quick, and helped me choose the perfect color. The app kept me updated throughout. Feels like I’m living in a brand-new space!",
    rating: 4,
  },
  {
    name: "Amit Verma",
    image: cust3,
    description:
      "I recently moved houses and booked shifting services through ServiceEase. The movers were fast, careful with my stuff, and super professional. Everything was packed and unpacked smoothly. This platform really saved me time and stress!",
    rating: 5,
  },
];

const Reviews = () => {
  const settings = {
    centerMode: true,
    centerPadding: '0px',
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    arrows: true,
  };

  const renderStars = (count) => {
    return (
      <div className="flex justify-center mb-2">
        {[...Array(5)].map((_, i) =>
          i < count ? (
            <FaStar key={i} className="text-yellow-400" />
          ) : (
            <FaRegStar key={i} className="text-gray-300" />
          )
        )}
      </div>
    );
  };

  return (
    <section className="py-16 bg-white">
      <style>
        {`
          .slick-slide {
            transition: transform 0.3s ease;
            opacity: 0.5;
            transform: scale(0.9);
          }

          .slick-center {
            transform: scale(1.02);
            opacity: 1;
          }

          .slick-prev:before,
          .slick-next:before {
            color: black !important;
            font-size: 28px;
          }
        `}
      </style>

      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
  <span className="text-black">Verified </span>
  <span className="text-blue-600">Reviews</span>
</h2>

        <Slider {...settings}>
          {testimonials.map((dest, index) => (
            <div key={index}>
              <div className="bg-purple-100 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow mx-4">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-40 h-40 object-cover rounded-full mx-auto mt-2 border-4 border-white"
                />
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-semibold mb-1">{dest.name}</h3>
                  {renderStars(dest.rating)}
                  <p className="text-gray-600 text-sm leading-relaxed">{dest.description}</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Reviews;
