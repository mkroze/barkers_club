const BigTitle = ({title,description}) => {
    return ( <div className="text-center mb-12">
    <h1 className="text-3xl text-green-600 font-semibold">
      {title}
    </h1>
    <p className="mt-3 text-l text-gray-500">
      {description}
    </p>
  </div> );
}
 
export default BigTitle;