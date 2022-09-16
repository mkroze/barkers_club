import { useState } from "react";
import DogWalkingOffers from "./DogWalkingOffers";

const Dogwalking = () => {
    const [briefs,setBriefs] = useState({
        brief1: "Un chien est generalement energetique et a besoin de se depenser quotidiennement pour son bien etre. Ce qui n'est pas forcement evident auqnd on a un emploi du temps charge.",
        brief2: "Le barkers club offre donc a ses membres notre service de dogwalking",
        brief3: "Nos equipes s'occupent de recuperer votre chien aux horaires convenus et se chargent de bien depenser son energie avec au programme des circuits de marches ainsi que des seances de jeu en groupe.",
        brief4: "Selon nos derniers sondages, les chiens inscrits a ce service sont plus sociables et epanouis.",
    })

    return ( <div>
		<div className="text-center mt-12 mx-auto px-4 w-1/2 lg:px-8">
		<h2 class="font-semibold text-3xl text-green-600">Programme de promenades</h2>
        <p className="text-justify mt-3 text-gray-500">
			{briefs.brief1}<br/>
	        {briefs.brief2}<br/>
	        {briefs.brief3}<br/>
	        {briefs.brief4}
		</p>
        </div>
		<div class="flex flex-col items-center justify-around text-gray-700 md:p-20">
			<div class="flex flex-wrap items-center justify-center w-full max-w-4xl ">
			
				<DogWalkingOffers/>
			</div>
		</div>

    </div> );
}

export default Dogwalking;
