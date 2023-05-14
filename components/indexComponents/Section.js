const Section = ({info}) => {
    return ( <section>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div
              className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
            >
              <img
                alt="Party"
                src={info.image}
                className="absolute inset-0 h-2/3 w-full object-cover my-auto rounded-xl"
              />
            </div>
      
            <div className="lg:py-24">
              <h2 className="text-4xl text-green-600 font-bold ">{info.title1}</h2>
      
              <p className="mt-4 text-gray-600 text-justify">
                {info.description1}
              </p>
              <h2 className="text-4xl text-green-600 font-bold mt-8">{info.title2}</h2>
              <p className="mt-4 text-gray-600 text-justify">
                {info.description2}
              </p>
              
                
              
            </div>
          </div>
        </div>
      </section>
       );
}
 
export default Section;