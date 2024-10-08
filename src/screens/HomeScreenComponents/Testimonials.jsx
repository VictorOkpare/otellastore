import React from 'react';
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "James Imagbbom",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto impedit laudantium nesciunt eius doloremque cum aspernatur amet itaque enim",
    img: "https://picsum.photos/101/101"
  },
  {
    id: 2,
    name: "Wizzy Baby",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto impedit laudantium nesciunt eius doloremque cum aspernatur amet itaque enim",
    img: "https://picsum.photos/101/102"
  },
  {
    id: 3,
    name: "Ella Stacy",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto impedit laudantium nesciunt eius doloremque cum aspernatur amet itaque enim",
    img: "https://picsum.photos/101/103"
  },
  {
    id: 4,
    name: "James",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto impedit laudantium nesciunt eius doloremque cum aspernatur amet itaque enim",
    img: "https://picsum.photos/101/104"
  },
  {
    id: 5,
    name: "James",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto impedit laudantium nesciunt eius doloremque cum aspernatur amet itaque enim",
    img: "https://picsum.photos/101/105"
  }
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ]
  };

  return (
    <div className='py-10 dark:bg-black'>
      <div className='container'>
        {/* header section */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <p data-aos="fade-up" className='text-sm text-primary'>What our customers are saying</p>
          <h1 data-aos="fade-up" className='text-3xl font-bold'>Testimonials</h1>
          <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolor veniam consequuntur. Inventore fuga unde.</p>
        </div>
        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className='my-6'>
                <div className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative'>
                  <div className='mb-4'>
                    <img src={data.img} alt="" className='rounded-full w-20 h-20' />
                  </div>
                  <div className='flex flex-col items-center gap-4'>
                    <div className='space-y-3'>
                      <p className='text-xs text-black dark:text-white'>{data.text}</p>
                      <h1 className='text-xl font-bold text-orange-500 dark:text-light'>{data.name}</h1>
                    </div>
                  </div>
                  <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>,,</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
