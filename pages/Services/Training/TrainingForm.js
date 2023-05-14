import { useState } from "react";

const TrainingForm = () => {
    const [questions,setQuestions] = useState([
        {text: "Agressivite"},
        {text: "Aboiement excessif"},
        {text: "Mastication destructice"},
        {text: "Instinct protecteur envers la nourriture"},
        {text: "Hurlement"},
        {text: "Frottement et masturbation"},
        {text: "Morsure chez l'adulte"},
        {text: "Morsure chez l'enfant"},
        {text: "Angoisse de separation"},
        {text: "Gemissements"}
    ])
    
    return ( <div className="my-4 max-w-2xl mx-auto bg-green-50 rounded-lg p-6">
        <form className=" ">
        <fieldset className="text-2xl font-medium text-gray-600 mb-12 ">
            Problemes communs
        </fieldset>
        {
            questions.map( (question,index) => {
            return <div className=" w-2/3 m-auto flex flex-start items-center">
                <input 
                type="checkbox" 
                id={index} 
                className="mr-3 rounded-sm active:outline-none checked:bg-green-400  hover:bg-green-50"/>
                <label className="text-justify mb-1 text-gray-500">
                    {question.text}
                </label>
            </div>
            })
        }
        <button 
        // onClick={handleSubmit}
        type="submit" 
        className="mt-6 text-white bg-green-600 hover:bg-green-200 hover:text-green-600 focus:ring-2 focus:outline-none focus:ring-green-600 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
            Commander un dressage
        </button>
    </form>
    </div> );
}
 
export default TrainingForm;