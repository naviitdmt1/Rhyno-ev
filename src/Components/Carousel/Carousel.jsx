import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from '../Card';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
  };

  return (
    <Slider {...settings}>
      <div>
        <Card
          heading="LFP Battery"
          paragraph="Rhyno is equipped with Lithium Iron Phosphate (LFP) batteries,
          renowned for their safety features—eliminating the risk of fire associated with other
          Lithium batteries. These batteries boast a broader temperature range, ideal for the
          diverse Indian climate. Our technology enhances Rhyno's longevity, complemented
          by an Active Balancing Smart Battery Management System (BMS) for extended life
          and reduced maintenance. Each battery undergoes rigorous waterproofing tests
          according to IP76 standards. But it doesn't stop there—our technology goes the extra
          mile in ensuring the battery's lasting durability. Connect with us to discover the
          thoughtful engineering behind our batteries!"
        />
      </div>
      <div>
        <Card
          heading="Wider tyres"
          paragraph="Now, say goodbye to skidding and embrace the leaning turns!
          Featuring first-of-its-kind, 9.5-inch wider tyres that make this machine an enormous
          beast that ensures stability on different terrains such as wet roads, mud, and sand."
        />
      </div>
      <div>
        <Card
          heading="Range prediction"
          paragraph="Many budget-friendly electric scooters overlook this crucial
          feature, causing riders to experience range anxiety. With Rhyno, you can ride with
          peace of mind, thanks to the scooter providing precise information about the
          remaining battery."
        />
      </div>
      <div>
        <Card
          heading="Extraordinery Experience"
          paragraph="Rhyno is more than just a mode of transportation. It is
          an experience of sheer comfort and style! A seamless fusion of minimalism,
          sophistication, and a touch of masculinity!"
        />
      </div>
      <div>
        <Card
          heading="Rugged and simple Design"
          paragraph="We’ve had enough of the EVs looking and feeling like
          fragile plastic toys. Often fading out and shamelessly breaking in minor accidents,
          ending up spending weeks and months at service stations for complex repairs. We
          took a bold step of making something raw, rugged, and practical. We kept it so
          simple that even your trusted local mechanic can understand and repair most of it. If
          you have reached this far, why not to take a test ride? Click here to locate your
          nearest dealership or book a test ride at your home!"
        />
      </div>
    </Slider>
  );
};

export default Carousel;
