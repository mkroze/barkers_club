import { useState } from 'react';
import 'tailwindcss/tailwind.css';
import BigWords from '../components/indexComponents/BigWords';
import CTA from '../components/indexComponents/CTA';
import Features from '../components/indexComponents/Features';
import Testimonials from '../components/indexComponents/Testimonials';
import Newsletter from '../components/indexComponents/Newsletter';
import Layout from '../components/Layout';
import BigTitle from '../components/indexComponents/BigTitle';
import MiniService from '../components/indexComponents/MiniService';
export default function Home() {
  const [ingredients, setIngeredients] = useState({
    headline: 'Améliorez la vie de votre chien avec notre soutien expert',
    subheadline: 'Tout ce dont vous avez besoin pour votre meilleur ami',
    primaryCTA: [
      { title: "S'inscrire", path: '/login' },
      { title: 'Services', path: '/Services' },
      { title: 'Boutique', path: '/items' },
    ],
    summary:
      "Notre site web est dédié à tous les amoureux des chiens. Nous proposons une encyclopédie complète des races de chiens, ainsi qu'une boutique en ligne pour tous vos besoins en matière de nourriture, d'accessoires et de soins pour chiens. Nous offrons également des services de garde de chiens, de dressage et de promenades pour votre animal de compagnie. Rejoignez notre communauté en ligne pour des conseils et des astuces sur la vie avec les chiens.",
    supportingImage:
      'https://images.unsplash.com/photo-1585664811087-47f65abbad64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9nJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60',
    benefits: {
      dogs: "Nous sommes la premiere plateforme en ligne qui simplifie enormement le processus d'adoption ! ",
      toys: "Afin d'eviter tout achat superflu, nous avons reuni dans notre boutique uniquement les accessoires indispensables au bien etre de votre chien",
    },
    socialProof: [
      {
        name: 'Loupi Amine',
        profession: 'Artiste',
        image:
          'https://images.unsplash.com/photo-1529066792305-5e4efa40fde9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXJ0aXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
        title: 'Meilleure garderie en ligne',
        description:
          "J'ai utilisé les services de garde de chiens de ce site et j'ai été impressionné par la qualité de la garde. Mon chien était heureux et en bonne santé à mon retour. Les gardiens étaient très professionnels et ont suivi toutes les instructions à la lettre. Je recommande fortement ce service à tous les propriétaires de chiens!",
      },
      {
        name: 'Fatima Zawali',
        profession: 'Dentiste',
        image:
          'https://images.unsplash.com/photo-1588776813677-77aaf5595b83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRlbnRpc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60',
        title: 'Mon chiot ne me mord plus',
        description:
          "J'ai utilisé les services de dressage du Barkers club pour mon chiot. Sous la direction du dresseur Ahmed, j'ai vu des résultats incroyables en seulement quelques semaines. Mon chiot est maintenant plus obéissant et plus calme. Je recommande fortement les services de dressage de ce site et Ahmed en particulier, pour tous les propriétaires de chiens qui cherchent à améliorer le comportement de leur animal de compagnie.",
      },
      {
        name: 'Karim Driouch',
        profession: 'Sportif',
        image:
          'https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnRzbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
        title: 'Il a eu sa dose de promenades',
        description:
          "j'ai utilisé les services de promenade de chien de ce site pour mon berger allemand. Les promeneurs étaient toujours à l'heure et mon chien est revenu heureux et épuisé après chaque promenade. Je recommande fortement ce service pour tous les propriétaires de chiens actifs.",
      },
      {
        name: 'Sophia Maataoui',
        profession: 'Veterinaire',
        image:
          'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        title: 'Mon chien a enfin sa petite famille !',
        description:
          "J'ai utilisé les services de mise en relation de reproducteurs de ce site pour mon berger australien. J'ai été très satisfaite du processus et du résultat final. Mon chien est maintenant mère de deux magnifiques chiots. Je recommande fortement ce service pour tous les propriétaires de chiens qui cherchent à reproduire leur animal.",
      },
    ],
    //navigation: "",
    contentOffers: '',
    secondaryCTA: {
      actions: [
        { title: 'Encyclopedie canine', path: '/encyclopedia' },
        { title: 'Blog du barkers club', path: '/blog' },
      ],
      brief1: "Pour plus de renseignements, n'hesitez pas a ",
      brief2: 'consulter nos rubriques',
    },
    features: [
      {
        title: 'Promenades',
        description:
          "Assurez-vous que votre chien reçoit suffisamment d'exercice et de stimulation mentale.",
        img: '/features_pics/dog-walking.png',
        path: 'Services/Dogwalking/',
      },
      {
        title: 'Garderie canine',
        description:
          'Gardez votre chien en toute sécurité et en bonne santé pendant vos absences avec notre garde de chiens.',
        img: '/features_pics/dog-house.png',
        path: 'Services/Petsitting/',
      },
      {
        title: 'Dressage',
        description:
          'Améliorez la relation entre vous et votre chien avec notre programme de dressage professionnel.',
        img: '/features_pics/trainer.png',
        path: 'Services/Training/',
      },
      {
        title: 'Accouplement',
        description:
          'Trouvez le partenaire idéal pour votre chien grâce à notre service de mise en relation de reproducteurs.',
        img: '/features_pics/pet-care.png',
        path: 'Services/Tinder/',
      },
    ],
    ressource: '',
    successIndicators: '',
  });
  const {
    headline,
    subheadline,
    primaryCTA,
    supportingImage,
    summary,
    benefits,
    socialProof,
    contentOffers,
    secondaryCTA,
    features,
    ressource,
    successIndicators,
  } = ingredients;

  return (
    <Layout title="Home Page">
      
      <BigTitle
        title="Accueil"
        description="Bienvenue au Barkers Club, votre source de confiance pour tous les besoins de votre chien"
      />
      <MiniService className='w-3/4'/>
      <div className="flex flex-col justify-center">
        <div className='m-auto w-5/6'>
          <BigWords
          headline={headline}
          subheadline={subheadline}
          summary={summary}
          CTA={primaryCTA}
          img={supportingImage}
          className="m-auto"
        />
        </div>
        

        <Features features={features} />

        <Testimonials socialProof={socialProof} />

        <CTA info={secondaryCTA} />
        <Newsletter />
      </div>
    </Layout>
  );
}
