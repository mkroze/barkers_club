const Hero = ({summary}) => {
    return ( 
    <div className="text-justify space-y-4">
        
        <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            {summary}
        </p>
    </div>
     );
}
 
export default Hero;