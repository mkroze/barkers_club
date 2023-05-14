import Offers from './Offers';
import React from 'react';
import FAQs from './FAQs';
import CTA from './CTA';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const ServiceDisplay = ({ infos }) => {
  return (
    <div>
      <div className="text-center mt-12 mx-auto px-4 w-1/2 lg:px-8">
        <h2 className="font-semibold text-3xl text-green-600">{infos.title}</h2>
      </div>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt="Party"
              src={infos.image}
              className="absolute inset-0 h-2/3 w-full object-cover my-auto rounded-xl"
            />
          </div>

          <div className="lg:py-24">
            {infos.description.map((paragraph) => {
              return (
                <p className="mt-4 text-gray-600 text-justify">{paragraph}</p>
              );
            })}
          </div>
        </div>
      </div>
      <div className="m-auto w-5/6">
        <div className="mt-16 grid p-4 bg-green-600 divide-x divide-y rounded-xl gap-4 overflow-hidden sm:grid-cols-2  lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-3">
          {infos.features.map((feature) => {
            return (
              <div className="relative group bg-gray-200 transition rounded-xl hover:z-[1]">
                <div className="relative p-8 space-y-8">
                  <div className="space-y-2">
                    <p className="text-m text-center font-bold text-green-600">
                      {feature}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-12">
        <div className=" mx-auto max-w-7xl pt-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
          <h2 className=" font-bold tracking-tight text-gray-900 ">
            <span className="text-3xl">{infos.action.brief1}</span>
            <br />
            <span className="text-xl text-green-600">
              {infos.action.brief2}
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 w-1/3">
          <div className="grid grid-cols-2 gap-2 justify-between rounded-md shadow">
              <a
                href={infos.action.path}
                className="inline-flex ml-4 items-center justify-center rounded-md border border-transparent bg-green-600 px-2 py-3 text-base font-medium text-white hover:bg-green-700"
              >
                {infos.action.title}
              </a>
              <a
                href={infos.action.path0}
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-green-600 px-2 py-3 text-base font-medium text-white hover:bg-green-700"
              >
                {infos.action.title0}
              </a>
            </div>
          
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col items-center justify-around text-gray-700 md:p-20">
        <div className="flex flex-wrap items-center justify-center w-full max-w-4xl ">
          <Offers offers={infos.action} />
        </div>
      </div> */}
      <div>
        <div className="xl:px-20 px-8 py-8 2xl:mx-auto 2xl:container relative z-50">
          <CarouselProvider
            naturalSlideWidth={100}
            isIntrinsicHeight={true}
            totalSlides={infos.testimonials.length}
          >
            <Slider>
              {infos.testimonials.map((proof, indexx) => {
                return (
                  <Slide index={indexx} tabIndex="null">
                    <div className="flex">
                      <div className="mt-14 md:flex">
                        <div className="flex justify-center lg:w-1/2 m-auto sm:w-96 xl:h-96 h-20">
                          <img
                            src={proof.image}
                            alt="image of profile"
                            className="w-5/6 h-full flex-shrink- object-fit object-cover shadow-lg rounded-xl"
                          />
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
                );
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
      <div className="m-auto w-1/2">
        {infos.questions.map((faq) => {
          return <FAQs faq={faq} />;
        })}
      </div>
    </div>
  );
};

export default ServiceDisplay;
