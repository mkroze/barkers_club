const CTA = ({info}) => {
    return ( 
        <div className="bg-gray-50">
            <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                <span className="block">{info.brief1}</span>
                <span className="block text-green-600">{info.brief2}</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                {
                    info.actions.map( (action,index) => {
                        return (index==0)
                        ?<div className="inline-flex rounded-md shadow">
                            <a href={action.path} 
                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-green-600 px-5 py-3 text-base font-medium text-white hover:bg-green-700">
                                {action.title}
                            </a>
                        </div>
                        :<div className="ml-3 inline-flex rounded-md shadow">
                        <a href={action.path} 
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-green-600 hover:bg-green-50">
                            {action.title}
                        </a>
                        </div>
                    } )
                }
                
            </div>
            </div>
        </div>
    );
}
 
export default CTA;