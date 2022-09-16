const Features = ({features}) => {
    return ( 
        <div className="py-16 bg-gray-50 overflow-hidden">
            <div className="container m-auto px-6 space-y-8 text-gray-500 md:px-12">
                <div>
                    <h2 className="mt-4 text-2xl text-gray-900 font-bold md:text-4xl">
                        On propose a nos membres les services suivants
                    </h2>
                </div>
                <div className="mt-16 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4">
                    {
                        features.map( (feature) => {
                            return (<div className="relative group bg-green-100 transition hover:z-[1] hover:shadow-2xl">
                                <div className="relative p-8 space-y-8">
                                    <img src={feature.img} className="w-10" width="512" height="512" alt="burger illustration"/>
                                    <a href="" title="dog walking icons"></a>
                                    <div className="space-y-2">
                                        <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-green-600">
                                            {feature.title}
                                        </h5>
                                        <p className="text-sm text-gray-600">
                                            {feature.description}
                                        </p>
                                    </div>
                                    <a href="#" className="flex justify-between items-center group-hover:text-green-600">
                                        <span className="text-sm">
                                            Read more
                                        </span>
                                        <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">&rarr;</span>
                                    </a>
                                </div>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        </div> );
}
 
export default Features;