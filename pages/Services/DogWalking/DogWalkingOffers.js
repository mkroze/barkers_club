import { useState } from "react";
const DogWalkingOffers = () => {
    const [offers,setOffers] = useState([
        {
			title:"Little barker",
			pricing:"200",
			listOfPerks:[
				"Sortie bi-mensuelle",
				"Activite de groupe"
			]
		},
        {
			title:"Barker",
			pricing:"750",
			listOfPerks:[
				"Sorties hebdomadaire",
				"Activite de groupe",
				"Seance individuelles"
			]
		},
        {
			title:"Big barker",
			pricing:"900",
			listOfPerks:[
				"Randonnees quotidiennes",
				"Activite de groupes et individuelles",
				"dressage"
			]
		}
    ])
    return ( offers.map((offer)=>{
        return(<div class="flex flex-col flex-grow overflow-hidden bg-white rounded-lg shadow-lg mr-1 w-1/4">
        <div class="flex flex-col items-center p-10 bg-green-400 rounded-md">
            <span class="font-semibold text-3xl text-gray-600">{offer.title}</span>
            <div class="flex items-center">
                <span class="text-5xl font-bold text-white">{offer.pricing}</span>
                <span class="text-3xl text-white">MAD</span>
                <span class="text-2xl text-white">/mois</span>
            </div>
        </div>
        <div class="p-10">
            <ul>
                {offer.listOfPerks.map((perk)=>{
                    return <li class="flex items-center">
                    <svg class="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    <span class="ml-2">{perk}</span>
                </li>
                })}
                
            </ul>
        </div>
        <div class="flex px-10 pb-10 justfy-center">
            <button class="flex items-center justify-center w-full h-12 px-6 text-sm uppercase bg-gray-200 font-bold rounded-lg hover:bg-green-200 hover:text-green-600">Join now</button>
        </div>
    </div>);
        
    }) );
}
 
export default DogWalkingOffers;