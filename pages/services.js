import { useState } from "react";
import Dogwalking from "./Services/Dogwalking";
import Petsitting from "./Services/Petsitting";
import Training from "./Services/Training";
import Tinder from "./Services/Tinder";
const Services = () => {
    const [briefs,setBriefs]=useState({
        brief1:"Le barkers club offre a ses membres quelques services concus pour faciliter l'adoption de chiens, a savoir le dressage, la recherche de partenaires pour l'accouplement, le dogsitting, le dogwalking et enfin le toilettage.",
        brief2:"Vous trouverez plus de renseignements dans chaque rubrique :",
        
    });
    
    const [teasers,setTeasers] = useState([
        {
            title:"Garderie canine",
            brief:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati alias cupiditate eaque ab soluta assumenda. Quae minima cum cumque nihil eveniet magnam porro quis reprehenderit animi, ipsa suscipit omnis ad!",
            picture:"https://images.unsplash.com/photo-1632236519667-29b4b78da232?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGRvZyUyMGhvdXNlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            path: "/Services/Petsitting" 
        },
        {
            title:"Promenades",
            brief:"Un chien est generalement energetique et a besoin de se depenser quotidiennement pour son bien etre. Ce qui n'est pas forcement evident auqnd on a un emploi du temps charge.",
            picture:"https://images.unsplash.com/photo-1504199098938-e4bbcee5e4a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nJTIwd2Fsa3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            path: "/Services/Dogwalking" 
        },
        {
            title: "Recherche de partenaires" ,
            brief:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati alias cupiditate eaque ab soluta assumenda. Quae minima cum cumque nihil eveniet magnam porro quis reprehenderit animi, ipsa suscipit omnis ad!",
            picture:"https://images.unsplash.com/photo-1546238232-20216dec9f72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHVwcGllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            path: "/Services/Tinder" 
        },
        {
            title:"Dressage",
            brief:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati alias cupiditate eaque ab soluta assumenda. Quae minima cum cumque nihil eveniet magnam porro quis reprehenderit animi, ipsa suscipit omnis ad!",
            picture:"https://images.unsplash.com/photo-1546815708-410983510897?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhaW5pbmclMjBkb2d8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            path: "/Services/Training" 
        }
        
    ])

    return ( 
    <>
    <section className="mt-12 mx-auto px-4 w-2/3 lg:px-8">
        <div className="text-center" >
            <h2 className="text-2xl text-green-600 font-semibold mt-3">
                Nos services
            </h2>
            <p className="text-justify mt-3 text-gray-500">
                {briefs.brief1}
            </p>
            <p className="text-justify mt-3 text-gray-500">
                {briefs.brief2}
            </p>

        </div> 
        
    </section>
    <section className="mt-12 mx-auto px-4 w-full lg:px-8">
        {
            teasers.map((teaser,idx)=>{
                return (idx%2==0)
                ?<div className="flex flex-row w-5/6 m-auto justify-end mb-5">
                
                <div className="w-2/3 flex flex-row rounded-md justify-evenly bg-green-200 h-1/4 ">
                    
                    <div className="flex flex-col text-center justify-around  ">
                        <h1>{teaser.title}</h1>
                        <p 
                        className="w-2/3 text-justify m-auto p-2 text-gray-600">
                            {teaser.brief}
                        </p>
                        <a href={teaser.path}
                        className="font-bold text-gray-600 hover:text-green-600 mb-3">
                            En savoir plus
                        </a>
                    </div>
                    <img src={teaser.picture} 
                        className=" rounded-md m-auto w-2/5 self-center ml-15"/>
                </div>
            </div>
                :<div className="flex flex-row w-5/6 m-auto justify-start mb-5">
                
                    <div className="w-2/3 flex flex-row rounded-md justify-evenly bg-green-200 h-1/4 ">
                        <img src={teaser.picture} 
                            className=" rounded-md m-auto w-2/5 self-center ml-15"/>
                        <div className="flex flex-col text-center justify-around  ">
                        <h1>{teaser.title}</h1>
                            <p 
                            className="w-2/3 text-justify m-auto p-2 text-gray-600">
                                {teaser.brief}
                            </p>
                            <a href={teaser.path}
                            className="font-bold text-gray-600 hover:text-green-600 mb-3">
                                En savoir plus
                            </a>
                        </div>
                    </div>
                </div>
            })
        }
    </section>
    </>
    );
}

export default Services;