import Link from "next/link";
import { useState,useEffect } from "react";
import axios from "axios"; 
const Encyclopedia = () => {
    const [info,setInfo] = useState([]);
    
    useEffect(()=>{
        const fetchData = async () =>{
            try {
                const {data: response} = await axios.get('http://localhost:3001/all');
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
    function titleCase(str) {
        str = str.toLowerCase();
        str = str.split(' ');
        for (var i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
        }
        return str.join(' '); // ["I'm", "A", "Little", "Tea", "Pot"].join(' ') => "I'm A Little Tea Pot"
    }
    return (
        <section className="mt-12 mx-auto px-4 max-w-screen-xl lg:px-8">
            <div className="text-center">
                <h1 className="text-3xl text-green-600 font-semibold">
                    Encyclopedie canine
                </h1>
                <p className="mt-3 text-gray-500">
                    Vous trouverez toutes les informations utiles concernant une selection de races dans cette rubrique :
                </p>
            </div>
            <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {
                    info.map((information, index) => { 
                            console.log(information.title.toLowerCase().replaceAll(" ","_"));
                            return (
                            <article className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm hover:border-2 hover:border-green-600" id={information.title} key={index}>
                                <Link
                                href={{
                                    pathname: '/Dog',
                                    query: { name: information.title.toLowerCase().replaceAll(" ","_") }
                                }}
                                >
                                <a> 
                                    <img src={information.img} loading="lazy" alt={information.title}  className="w-full h-48 rounded-t-md" />
                                
                                    <div className="pt-3 ml-4 mr-2 mb-3">
                                        <h3 className="text-xl text-gray-900 text-center hover:text-green-600 ">
                                            {titleCase(information.title)}
                                        </h3>
                                        <p className="text-gray-400 text-sm mt-1">{information.brief.substr(0,210).concat('...')}</p>
                                    </div>
                                </a>
                                </Link>
                            </article>)}
                        )
                }
            </div>
        </section>
    )
}
export default Encyclopedia;