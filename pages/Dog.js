import { useState,useEffect } from "react";
import { useRouter } from 'next/router'
import axios from "axios";

const Dog = (props) => {

  const router = useRouter();
  const query = router.query;
  const [info,setInfo]=useState({});
  
  const getData = async  ()=>{
    await axios.get('http://localhost:3001/'+query.name)
    
      .then(function (response) {

        setInfo(response.data);

      })
      .catch(function (error) {
        console.log(error);
      })
  }

  useEffect(  ()=>{  getData()  },[] );
  console.log(info);
  const {brief,history,physical,behaviour,education,condition,health,lifespan,hygiene,food,activity} = info ;//
  return (
  <section className="mt-12 mx-auto px-4 w-1/2 lg:px-8">
    <div className="text-center">
      <h2 className="text-2xl text-green-600 font-semibold mt-3">Breve presentation</h2>
      <p className="text-justify mt-3 text-gray-500">{brief}</p>
      
      <h2 className="text-2xl text-green-600 font-semibold mt-3">Histoire de la race</h2>
      <p className="text-justify mt-3 text-gray-500">{history}</p>
      
      <h2 className="text-2xl text-green-600 font-semibold mt-3">Particularites physiques</h2>
      <p className="text-justify mt-3 text-gray-500">{physical}</p>
      
      <h2 className="text-2xl text-green-600 font-semibold mt-3">Comportement et caractère</h2>
      <p className="text-justify mt-3 text-gray-500">{behaviour}</p>
      
      <h2 className="text-2xl text-green-600 font-semibold mt-3">Education et dressage</h2>
      <p className="text-justify mt-3 text-gray-500">{education}</p>
      
      <h2 className="text-2xl text-green-600 font-semibold mt-3">Conditions de vie</h2>
      <p className="text-justify mt-3 text-gray-500">{condition}</p>
      
      <h2 className="text-2xl text-green-600 font-semibold mt-3">Sante</h2>
      <p className="text-justify mt-3 text-gray-500">{health}</p>
      
      <h2 className="text-2xl text-green-600 font-semibold mt-3">Esperance de vie</h2>
      <p className="text-justify mt-3 text-gray-500">{lifespan}</p>
      
      <h2 className="text-2xl text-green-600 font-semibold mt-3">Entretien et hygiene</h2>
      <p className="text-justify mt-3 text-gray-500">{hygiene}</p>
      
      <h2 className="text-2xl text-green-600 font-semibold mt-3">Alimentation</h2>
      <p className="text-justify mt-3 text-gray-500">{food}</p>
      
      <h2 className="text-2xl text-green-600 font-semibold mt-3">Activite physique</h2>
      <p className="text-justify mt-3 text-gray-500">{activity}</p>

  </div>
  </section>);
}

export default Dog;