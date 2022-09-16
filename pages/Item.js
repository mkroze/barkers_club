import { useState,useEffect } from "react";
import { useRouter } from 'next/router'
import axios from "axios";

const Item = () => {
    const router = useRouter();
    const query = router.query;
    const [info,setInfo]=useState({});

    const getData = async  ()=>{
        await axios.get('http://localhost:3002/'+query.name)
        
        .then(function (response) {
            setInfo(response.data);
        })
        .catch(function (error) {
            console.log(error);
            console.log('pas de lol');
        })
    }
    useEffect(  ()=>{  getData()  },[] );
    console.log(info);

    return ( <section className="mt-12 mx-auto px-4 w-1/2 lg:px-8">
        <div className="text-center">
            <img src={info.img} />
            <p className="text-2xl text-green-600 font-semibold mt-3">
                {info.name}
            </p>
            <p className="text-justify mt-3 text-gray-500">
                {info.brief}
            </p>
            <p>
                {info.price}
            </p>
        </div>
    </section> );
}
 
export default Item;