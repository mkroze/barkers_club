import React from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
/* Install pure-react-carousel using -> npm i pure-react-carousel */
export default function Testimonals({ socialProof }) {
  return (
    <div>
      <div className="flex items-center justify-between h-full w-full absolute z-0">
        
      </div>
      <div className="xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container relative z-50">
        <CarouselProvider
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={socialProof.length}
        >
          <h1 className="text-3xl font-bold xl:block hidden leading-tight text-green-600">
          La preuve de notre qualité
          </h1>
          
          <Slider>
            {socialProof.map((proof, indexx) => {
              return(
                <Slide index={indexx} tabIndex="null">
                  <div className="flex">
                    <div className="mt-14 md:flex">
                      <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                        <img
                          src={proof.image}
                          alt="image of profile"
                          className="w-full h-full flex-shrink- object-fit object-cover shadow-lg rounded-xl"
                        />
                        <div className="w-24 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-24 bg-green-800 rounded-full">
                          <img
                            src="/testimonial.png"
                            className="w-12"
                            alt="commas"
                          />
                        </div>
                      </div>
                      <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                        <div>
                          <h1 className="text-2xl font-semibold xl:leading-loose text-green-600">
                            {proof.title}
                          </h1>
                          <p className="text-justify font-medium leading-6 mt-4 text-gray-600">
                            {proof.description}
                          </p>
                        </div>
                        <div className="md:mt-0 mt-8">
                          <p className=" font-medium leading-4 text-green-800 text-2xl">
                            {proof.name}
                          </p>
                          <p className="text-l leading-4 mt-2 mb-4 text-gray-600">
                            {proof.profession}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slide>
              ) 
            })}
          </Slider>
          <div className="flex items-center mt-8">
            <ButtonBack
              className="cursor-pointer "
              role="button"
              aria-label="previous slide"
            >
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonal-svg2.svg"
                alt="previous"
              />
            </ButtonBack>

            <ButtonNext
              role="button"
              aria-label="next slide"
              className="cursor-pointer ml-2"
            >
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg3.svg"
                alt="next"
              />
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
}
