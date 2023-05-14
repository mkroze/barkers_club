const PartnerView = ({infos}) => {
  
    const {image, name, category, description, location, phone, price, availability, rating} = infos;

    const printStars = (rating) => {
      // Initialize the string of stars
      let stars = [];
      rating = Math.floor(rating) + 1;
    
      // Add yellow stars for the rating
      for (let i = 0; i < rating; i++) {
        stars.push(
          <svg
            className="w-5 h-5 text-green-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      }
    
      // Add white stars for any remaining stars
      for (let i = rating; i < 5; i++) {
        stars.push(
          <svg
            className="w-5 h-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      }
      
      return stars;
    };
    return ( 
      
      <article className="group flex my-2  w-5/6 m-auto justify-between">
        <img
          alt="Lava"
          src={image}
          className="h-56 w-1/5  rounded-xl grayscale-[80%] object-cover shadow-xl transition group-hover:grayscale-[0%]"
        />
      
        <div className="p-4 w-1/2 bg-green-100 rounded-xl border border-green-600">
          <div className="flex justify-between align-center">
          
            <h3 className="text-lg font-medium text-green-600">
              {name}
            </h3>
          
          <div className=" text-sm font-bold text-green-500 line-clamp-3 flex w-2/3 justify-around">
            <p> {category} </p>{' '} 
            <div className=" flex ">{printStars(rating).map((star) => star)}</div>
          </div>
          </div>
          
          <p className="mt-2 text-md leading-relaxed text-gray-500 line-clamp-3 p-4 text-justify">
            {description} 
          </p>
          
          
        </div>
        <div className="w-1/5 flex flex-col justify-center align-center bg-gray-400 group-hover:bg-green-600 rounded-xl p-4">
        <div className="mt-2 text-l font-bold text-white line-clamp-3 flex justify-between px-8  w-full align-center m-auto">
            <img src="/icons/carte.png" className="w-8" alt="icon_map" /> 
            {location} 
          </div>
          <div className="mt-2 text-l font-bold text-white line-clamp-3 flex justify-between px-8  w-full align-center m-auto">
          <img src="/icons/phone.png" className="w-8" alt="icon_map" /> 
            {phone}
          </div>
          <div className="mt-2 text-l font-bold text-white line-clamp-3 flex justify-between px-8  w-full align-center m-auto">
            <img src="/icons/check.png" className="w-8" alt="icon_map" /> 
            {availability}
          </div>
          <div className="mt-2 text-l font-bold text-white line-clamp-3 flex justify-between px-8  w-full align-center m-auto">
            <img src="/icons/label.png" className="w-8" alt="icon_map" /> 
            {price} MAD
          </div>
        </div>
      </article>
       );
}
 
export default PartnerView;