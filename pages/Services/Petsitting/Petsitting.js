import { useState } from "react";

const Petsitting = () => {
    const [briefs,setBriefs]=useState({
        brief1 : "Vous faites face a un imprevu ? Vous etes contraints de vous separer de votre boule de poils, et vous n'avez personne sur qui compter pour le garder ?",
        brief2 : "Pas de panique, le Barkers club propose a ses membres une service de garderie canine",
        brief3 : "Vous trouverez dans cette rubrique, les offres disponibles",
        brief4 : "Pourquoi ne pas profiter du sejour afin d'inculquer de bonnes manieres. Pour plus d'informations, priere de consulter la rubrique dressage",
        brief5 : "",
    });
	
	
    return ( 
    <div>
		<div className="text-center mt-12 mx-auto px-4 w-1/2 lg:px-8">
		<h2 class="font-semibold text-3xl text-green-600">Garderie canine</h2>
        <p className="text-justify mt-3 text-gray-500">
			{briefs.brief1}<br/>
	        {briefs.brief2}
		</p>
        </div>
		<div class="flex flex-col items-center justify-around  text-gray-700  md:p-20">
			<div class="flex flex-row items-center justify-center w-full max-w-4xl ">
			
				{
					
				}
				
			</div>
		</div>

    </div> 
    );
} 

export default Petsitting;