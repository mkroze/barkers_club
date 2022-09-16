import { useState,useEffect } from "react";
import axios from "axios";
import Link from "next/link";
const Shop = () => {
    const [items,setItems] = useState([]);
    
    useEffect(()=>{
        const fetchData = async () =>{
            try {
                const {data: response} = await axios.get('http://localhost:3002/all');
                let arr =[];
                Object.keys(response).forEach((key, index)=>{
                    arr.push(response[key]);
                })
                setItems(arr);
            } catch (error) {
                console.error(error.message);
            }
        }
        fetchData();
    },[]);
    console.error(items);
    return (
    <section className="mt-12 mx-auto px-4 max-w-screen-xl lg:px-8">
        <div className="text-center">
            <h1 className="text-3xl text-green-600 font-semibold">
                Boutique officielle du Barkers Club.
            </h1>
            <p className="mt-3 text-gray-500">
                Notre collection d'accessoires permet de couvrir l'integralite des besoins les plus frequents. 
            </p>
        </div>
        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-5">
            {
                items.map((item, index) => { 
                    return (
                        <article className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm hover:border-2 hover:border-green-600" id={item.title} key={index}>
                            <Link
                            href={{
                                pathname: '/Item',
                                query: { name: item.name.split(' ')[0] }
                            }}
                            >
                            <a> 
                                <img src={item.img} loading="lazy" alt={item.name}  className="w-full h-36 rounded-t-md" />

                                <div className="pt-3 ml-4 mr-2 mb-3">
                                    <h3 className="text-xl text-gray-900 text-center hover:text-green-600 ">
                                        {item.name}
                                    </h3>
                                    <p className="text-gray-400 text-sm mt-1 m-auto w-5/6 text-justify">{item.brief.substr(0,110).concat('...')}</p>
                                </div>
                                <div className="flex flex-row hidden md:inline-block">
                                    <a href="javascript:void(0)" className="py-3 px-4 text-white bg-green-600 hover:bg-gray-700 rounded-md shadow">
                                        Buy
                                    </a>
                                    <p>{item.price}</p>
                                </div>
                            </a>
                            </Link>
                        </article>
                    )
                })
            }
        </div>
    </section>
);
}

export default Shop;