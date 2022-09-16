import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
import { KeyboardFill } from 'react-bootstrap-icons';
import 'tailwindcss/tailwind.css';
import Footer from '../components/Footer';
import Navbar from '../components/navbar';
import BigWords from './indexComponents/BigWords';
import CTA from './indexComponents/CTA';
import Features from './indexComponents/Features';
export default function Home() {
  const [ingredients,setIngeredients] = useState({
    headline: "Nous offrons les meilleurs services aux adeptes de la passion canine !",
    subheadline: "Vous trouverez l'integralite des services pour couvrir les besoins de votre chien !",
    primaryCTA: [
      {title:"S'inscrire",path:"/login"},
      {title:"Services",path:"/services"},
      {title:"Boutique",path:"/shop"},
      
    ],
    supportingImage: "https://images.unsplash.com/photo-1585664811087-47f65abbad64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9nJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
    benefits: {
      dogs: "Nous sommes la premiere plateforme en ligne qui simplifie enormement le processus d'adoption ! ",
      toys: "Afin d'eviter tout achat superflu, nous avons reuni dans notre boutique uniquement les accessoires indispensables au bien etre de votre chien",
    },
    socialProof: "Loupi Amine : Je suis satisfait par tous les services proposes par le barkers club, je le recommande a tous les proprietaires de chien !",
    //navigation: "",
    contentOffers: "",
    secondaryCTA: {
      actions:[
      {title:"Encyclopedie canine",path:"/encyclopedia"},
      {title:"Blog du barkers club",path:"/blog"},
      ],
      brief1:"Pour plus de renseignements, n'hesitez pas a ",
      brief2:"consulter nos rubriques",
    },
    features: [
      {
        title: "Promenades",
        description: "Un service de promenade est mis a disposition en cas d'incapacite ou d'indisponibilite du maitre.",
        img: "/features_pics/dog-walking.png"
      },
      {
        title: "Garderie canine",
        description: "En cas d'absence prolongee, voous pouvez assurer tous les besoins de votre chien grace a ce service.",
        img: "/features_pics/dog-house.png"
      },
      {
        title: "Dressage",
        description: "Afin de vous debarasser de certains comportements indesirables, notre equipe de dresseurs se chargera d'eduquer votre chien.",
        img: "/features_pics/trainer.png"
      },
      
    ],
    ressource: "",
    successIndicators: "",
  })
  const {headline,subheadline,primaryCTA,supportingImage,benefits,socialProof,contentOffers,secondaryCTA,features,ressource,successIndicators} = ingredients
  
  return (
    <div className=' m-auto'>
      <BigWords
        headline={headline}
        subheadline={subheadline}
        CTA={primaryCTA}
        img={supportingImage}
      />
      
      <Features
        features={features}
      />

      <CTA
      info={secondaryCTA}/>
    </div>
  )
}
