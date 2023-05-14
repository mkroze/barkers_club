const BigWords = ({ headline, subheadline, summary, CTA, img }) => {

  return (
    <div className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div>
            <div className="relative px-4 pt-6 sm:px-6 lg:px-8"></div>
          </div>

          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline ">{headline}</span> <br />
                <span className="block text-green-600  text-4xl xl:inline">
                  {subheadline}
                </span>
              </h1>

              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                {CTA.map((action, index) => {
                  return index == 0 ? (
                    <div className="rounded-md shadow">
                      <a
                        href={action.path}
                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-green-600 px-8 py-3 text-base font-medium text-white hover:bg-green-700 md:py-4 md:px-10 md:text-lg"
                      >
                        {action.title}
                      </a>
                    </div>
                  ) : (
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <a
                        href={action.path}
                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-green-100 px-8 py-3 text-base font-medium text-green-700 hover:bg-green-200 md:py-4 md:px-10 md:text-lg"
                      >
                        {action.title}
                      </a>
                    </div>
                  );
                })}
                {/* <div className="rounded-md shadow">
                            <a href="#" className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg">Get started</a>
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                            <a href="#" className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg">Live demo</a>
                        </div> */}
              </div>
              <p className="mt-3 text-justify px-3 text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                {summary}
              </p>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-4 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full z-0"
          src={img}
          alt=""
        />
      </div>
    </div>
  );
};

export default BigWords;
