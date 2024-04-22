import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from './Cardimg';
import blackveh1 from '../Assets/blackveh1.png'
import redveh1 from '../Assets/redveh1.png'
import blueveh1 from '../Assets/blueveh1.png'

const Vehicles = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
  };

  const slides = [
    {
      imageUrl: blackveh1,
      description: `Indulge in the perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 2000W motor, it ensures a thrilling ride while still delivering an impressive 80-100km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhyno. Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn.`,
    },
    {
      imageUrl: redveh1,
      description: `This Rhyno is tuned for long drives and no thrills. Like all other variants, this machine comes with a fire-safe advanced LFP battery and all the other benefits of owning a Rhyno, along with a perfect blend of battery capacity and motor power to provide up to 150 km range on a single charge. While it may not provide a thrilling ride, it promises a dependable and unwavering presence on the long stretches.`,
    },
    {
      imageUrl: blueveh1,
      description: `his Rhyno is an entry-level variant tailor with a fire-safe advanced LFP battery and all the other benefits of owning a Rhyno but is designed with a smaller battery and motor. Offering the same elegance, comfort, and style, this variant is tailored for those seeking an easy-on-the-pocket solution without sacrificing essential benefits. With an 80-100 km range on a single charge and 	a top speed of 55 km/h, the Rhyno SE03 Lite ensures effortless commuting. If you're in pursuit of thrills or frequently ride with a pillion, we recommend exploring our higher-power variants. Here are some technical details for the SE03 Lite that you might find valuable.
      ed for medium-power, single-person usage. This machine maintains the Rhyno standards`,
    },
  ];

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index}>
          <Card imageUrl={slide.imageUrl} description={slide.description} />
        </div>
      ))}
    </Slider>
  );
};

export default Vehicles;
