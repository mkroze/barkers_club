import { useState,useEffect } from "react";
import axios from "axios"; 
const AvailableLovers = () => {
    const [info,setInfo] = useState([]);

    useEffect(()=>{
        const fetchData = async () =>{
            try {
                const {data: response} = await axios.get('http://localhost:3003/all');
                let arr =[];
                Object.keys(response).forEach((key, index)=>{
                    arr.push(response[key]);
                })
                setInfo(arr);
            } catch (error) {
                console.error(error.message);
            }
        }
        fetchData();
    },[]);

    return ( <section className="mt-12 mx-auto px-4 max-w-screen-xl lg:px-8">
    <div className="text-center">
        <h1 className="text-3xl text-green-600 font-semibold">
            Chiens disponibles pour l'accouplement
        </h1>
        
    </div>
    <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {
            info.map((information, index) => {
                return (
                <article 
                className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm  hover:border-green-600" 
                id={information.name} 
                key={index}>
                    
                    <a> 
                        <img src={information.img} loading="lazy" alt={information.name}  
                        className="w-full h-48 rounded-t-md" />
                    
                        <div className="pt-3 ml-4 mr-2 mb-3">
                            <h3 className="text-xl text-gray-900 text-center hover:text-green-600 ">
                                {information.name}
                            </h3>
                            <p className="mt-3 text-gray-500">
                                Age : {information.age}
                            </p>
                            <p className="mt-3 text-gray-500">
                                Nombres de grossesses : {information.births}
                            </p>
                            <p className="mt-3 text-gray-500">
                                Sexe de l'animal : {information.sex}
                            </p>
                        </div>
                    </a>
                </article>
                )}
            )
        }
    </div>
</section> );
}
 
export default AvailableLovers;