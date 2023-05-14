import { useState } from "react";

const PartnerForm = () => {
    const [gatheredInfos,setGatheredInfos]= useState({
        name:"",
        breed:"",
        age:"",
        picture:"",
    })
    const [questions,setQuestions]= useState([
        {
            text:"Nom",
            whatFor:"dog_name"
        },
        {
            text:"Race du chien",
            whatFor:"dog_breed"
        },
        {
            text:"Age du chien",
            whatFor:"dog_age"
        },
        {
            text:"Photo",
            whatFor:"dog_picture"
        },
        
    ])
    const handleSubmit = () => {
    }
    return ( 
        <div className="max-w-2xl mx-auto bg-green-50 rounded-lg p-16">
        
            <form>
                <fieldset className="text-2xl font-medium text-gray-600 mb-12 ">Chien</fieldset>
                <div className="grid gap-6 mb-6 lg:grid-cols-2">
                    {
                        questions.map((question)=>{
                            return(
                                <div>
                                    <label for={question.whatFor} className="block mb-2 text-sm font-medium text-green-600 ">{question.text}</label>
                                    <input type="text" id={question.whatFor} 
                                    className="bg-gray-50 border  text-gray-900 text-sm rounded-lg 
                                    focus:ring-green-200 focus:border-green-500 focus:bg-green-200
                                    hover:ring-green-200 hover:border-green-500  block w-full p-2.5 " required/>
                                </div>
                    )})}
                    
                </div>
                <fieldset className="text-2xl font-medium text-gray-600 mb-12 ">Maitre</fieldset>
                <div className="mb-6">
                    <label for="email" className="block mb-2 text-sm font-medium text-green-600 ">Adresse mail</label>
                    <input type="email" id="email" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                    focus:ring-green-200 focus:border-green-500 focus:bg-green-200 
                    hover:ring-green-200 hover:border-green-500 block w-full p-2.5 " 
                    placeholder="woof@barkers.com" 
                    required/>
                </div> 
                <div className="mb-6">
                    <label for="phone" className="block mb-2 text-sm font-medium text-green-600 ">Numero de telephone</label>
                    <input type="tel" id="phone" 
                    className="bg-gray-50 border border-2 border-gray-300 text-gray-900 text-sm rounded-lg 
                    focus:ring-green-200 focus:border-green-500 focus:bg-green-200 
                    hover:ring-green-200 hover:border-green-500 block w-full p-2.5 " 
                    placeholder="06 11 82 18 00" 
                    required/>
                </div> 
            
        
            <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-none focus:ring-blue-300 " required/>
                </div>
                <label for="remember" className="ml-2 text-sm font-medium text-gray-900 ">I agree with the <a href="#" className="text-green-600 hover:underline ">terms and conditions</a>.</label>
            </div>
            <button 
            onClick={handleSubmit}
            type="submit" 
            className="text-white bg-green-600 hover:bg-green-200 hover:text-green-600 focus:ring-2 focus:outline-none focus:ring-green-600 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">
                Submit
            </button>
        </form>

        </div> );
}
 
export default PartnerForm;