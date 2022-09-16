import { useState } from "react";
import TrainingForm from "./TrainingForm";
import TrainingOffers from "./TrainingOffers";

const Training = () => {
    const [briefs,setBriefs] = useState({
        brief1: "Votre chien est particulierement entete ce qui rend votre cohabitation particulierement execrable ? Ne vous en faites plus ! Le barkers club a la solution.",
        brief2: "Notre equipe de dresseurs se chargera de dresser votre animal de compagnie en ciblant particulierement les aspects les plus derangeants de ses ecarts de comportement !",
        brief3: "Notre service est garanti de vous satisfaire, Vous trouverez ci apres les offres liees au dressage",
        brief4: "Je vous prie de bien vouloir cocher les problemes lies au comportement de votre chien dans le formulaire ci-dessous",
    })

    return ( 
        <div>
            <div className="text-center mt-12 mx-auto px-4 w-1/2 lg:px-8">
            <h2 class="font-semibold text-3xl text-green-600">Dressage</h2>
            <p className="text-justify mt-3 text-gray-500">
                {briefs.brief1}<br/>
                {briefs.brief2}
            </p>
            </div>
            <div 
            className="flex flex-col items-center justify-around  text-gray-700  md:p-20">
                <div class="flex flex-row items-center justify-center w-full max-w-4xl ">
                    <TrainingOffers/>
                </div>
            </div>
            <div className="text-center mt-4 mx-auto px-4 w-1/2 lg:px-8">
                <p className="text-justify mt-3 text-gray-500">
                    {briefs.brief3}<br/>
                    {briefs.brief4}
                </p>
                <TrainingForm/>
            </div>
        </div> 
        );
}
 
export default Training;