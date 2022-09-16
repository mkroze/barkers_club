import { useState } from "react";
import Newsletter from "../components/Newsletter";

const About = () => {
    const [briefs,setBriefs]=useState({
        brief1:'The barkers club est une communaute marocaine des passiones par la race canine.',
        brief2:'Notre site internet se charge de subvenir aux eventuels besoins des proprietaires de chiens dans tout le royaume.',
        brief3:"Vous trouverez un concentre d'informations utiles dans notre rubrique Encyclopedie. Vous y trouverez aussi un petit questionnaire pour vous aider a choisir un chien adequat a votre mode de vie et personnalite.",
        brief4:"The barkers club propose aussi des services utiles : le toilettage, le dressage, le dogwalking et le petsitting.",
        brief5:"Si vous etes deja proprietaire, la boutique officielle du bakers club vous proposera les articles indispensables au bien etre de votre chien.",
        image1:'https://images.unsplash.com/photo-1529234620254-a0d21fd98c19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nJTIwb24lMjBncmFzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
        
    });
    const {brief1,brief2,brief3,brief4,brief5,image1}= briefs;
    return <><div className="flex flex-row w-3/4 m-auto items-center">
        <div className="w-2/3 m-auto">
            <h1 className="text-3xl text-center text-green-500 mb-5">About the barker's club</h1>
            <p className="text-justify">{brief1}</p>
            <p className="text-justify">{brief2}</p>
            <p className="text-justify">{brief3}</p>
            <p className="text-justify">{brief4}</p>
            <p className="text-justify">{brief5}</p> 
        </div>
        <div>
            <img src={image1} alt='doggo' className="m-auto w-1/2 rounded-md"/>
        </div>
    </div>
    <Newsletter/></>;
}

export default About;