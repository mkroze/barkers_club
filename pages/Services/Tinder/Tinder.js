import { useState } from "react";
import PartnerForm from "./PartnerForm";
import AvailableLovers from "./AvailableLovers";
const Tinder = () => {
    const [briefs,setBriefs] = useState({
        brief1: "Vous souhaiter agrandir votre famille avec une portee de chiots ? Pas de panique, le barkers club vous permet de choisir depuis votre fauteuil le partenaire ideal pour votre animal de compagnie ",
        brief2: "Afin de deposer une annonce de disponibilite d'accouplement, je vous prie de bien vouloir remplir le formulaire suivant :",
        brief3: "Vous pourrez consulter ici, les annonces des chiens disponibles",
        brief4: "",
    })
	const [displayed,setDisplayed] = useState(false)
	const handleClick = () => {
		setDisplayed(!displayed)
	}
    return ( <div>
		<div className="text-center mt-12 mx-auto px-4 w-1/2 lg:px-8">
		<h2 className="font-semibold text-3xl text-green-600">Recherche de partenaires canins</h2>
        <p className="text-justify mt-3 text-gray-500">
			{briefs.brief1}<br/>
	        {briefs.brief2}
        </p>
		<button onClick={handleClick} 
		className="text-green-600 bg-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center
		hover:text-green-600 
		">
			Voir le formulaire
		</button>
		{
			(displayed)
			?<PartnerForm />
			:<></>
		}
        
        <p className="text-justify mt-3 text-gray-500">
	        {briefs.brief3}<br/>
	        {briefs.brief4}
		</p>
		<AvailableLovers/>
        </div>
		

    </div> );
}
 
export default Tinder;