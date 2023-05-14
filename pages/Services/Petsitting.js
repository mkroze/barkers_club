import { useState } from 'react';
import Layout from '../../components/Layout';
import Offers from '../../components/indexComponents/Offers';
import ServiceDisplay from '../../components/indexComponents/ServiceDisplay';
const Petsitting = () => {
  const [infos, setInfos] = useState({
    title: 'Garderie canine',
    description: [
      "Le service de petsitting offre la possibilité à votre animal de compagnie de rester dans un environnement familier et confortable pendant votre absence. Nous nous occupons de prendre soin de votre animal de compagnie en respectant ses habitudes alimentaires, de sommeil et de jeu. Nous veillons à ce qu'il reçoive suffisamment d'attention, d'affection et d'exercice pour qu'il se sente en sécurité et en confiance.",
      'Notre personnel expérimenté et qualifié assurera la sécurité et le bien-être de votre animal de compagnie en tout temps. Nous nous occupons également de toutes les tâches ménagères liées à la prise en charge de votre animal, comme le nettoyage de sa litière, la distribution de ses repas et la promenade quotidienne.',
      "Le service de petsitting est idéal pour les propriétaires d'animaux qui sont souvent absents pour le travail ou les vacances, ou qui ne peuvent pas s'occuper de leur animal de compagnie en raison de la maladie ou de la blessure. C'est une alternative confortable et pratique à la pension pour animaux de compagnie, où votre animal peut recevoir une attention personnelle et individualisée dans un environnement familier.",
      "Nous offrons des options flexibles pour les heures et les jours de petsitting pour s'adapter à vos besoins uniques. Contactez-nous dès aujourd'hui pour discuter de la meilleure option pour votre animal de compagnie.",
    ],
    image:
      'https://images.unsplash.com/photo-1535126320463-c5c1b26b3e66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nJTIwaW4lMjBob3VzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    features: [
      'Garde de jour et de nuit pour vos animaux de compagnie',
      'Soins personnalisés pour chaque animal, selon leurs besoins individuels',
      'Nourriture et eau fraîches fournies',
      'Promenades quotidiennes pour les chiens',
      'Jouets et activités pour stimuler mentalement et physiquement vos animaux',
      "Mise à jour régulière sur l'état de votre animal via des photos et des messages",
      'Transport sécurisé pour vos animaux chez le vétérinaire ou chez le toiletteur',
      'Entretien quotidien de la litière pour les chiens',
      'Flexibilité des horaires pour convenir à vos besoins de voyage.',
    ],
    action: {
      brief1: 'Faites garder votre animal de compagnie en toute confiance',
      brief2: 'Profitez de vos voyages en sachant que votre animal est entre de bonnes mains.',
      title: 'Réservez une garde',
      path: "./Partners/Petsitters",
      title0: 'Devenez petsitter',
      path0: "./Partners/Register"
    },
    testimonials: [
      {
        image:
          'https://images.unsplash.com/photo-1617560611911-85e1055544cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2V3aWZlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
        title: 'Vacances memorables',
        description:
          'Nous avons confié notre chien à ce service de garde pour les vacances et nous avons été plus que satisfaits. Notre chien a été bien pris en charge et a passé un excellent moment. Merci pour votre excellent travail !',
        name: 'Badiaa Ejjouti',
        profession: 'Femme au foyer',
      },
      {
        image:
          'https://images.unsplash.com/photo-1600320254374-ce2d293c324e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dHJ1Y2slMjBkcml2ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60',
        title: 'Une renommee justifiee',
        description:
          "Je suis si reconnaissant pour ce service de garde d'animaux de compagnie. Mes chiens étaient en bonnes mains et j'ai pu partir en vacances en toute confiance. Je recommande vivement ce service à tous les propriétaires d'animaux de compagnie.",
        name: 'Othmane Rafik',
        profession: 'Distributeur gastronomique',
      },
      {
        image:
          'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2hlZiUyMGNvb2tpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60',
        title: 'Quel soulagement !',
        description:
          "Je suis tellement soulagé d'avoir trouvé ce service de garde pour mon chiot. Ils se sont occupés de lui avec beaucoup de soin et d'attention, et il est revenu à la maison heureux et en bonne santé. Merci beaucoup pour votre aide précieuse.",
        name: 'Driss Khaoua',
        profession: 'Chef cuisinier',
      },
    ],
    questions: [
      {
        question:
          'Est-ce que vous offrez des services de garde 24 heures sur 24 et 7 jours sur 7?',
        answer:
          'Oui, nous offrons des services de garde 24 heures sur 24 et 7 jours sur 7 pour les besoins de votre animal de compagnie.',
      },
      {
        question:
          'Est-ce que vous offrez des services de nourriture et de boisson pour les animaux de compagnie?',
        answer:
          "Oui, nous fournissons de la nourriture et de l'eau pour les animaux de compagnie selon les besoins spécifiques de chaque animal.",
      },
      {
        question:
          "Pouvez-vous fournir des mises à jour régulières sur l'état de mon animal de compagnie?",
        answer:
          "Oui, nous fournissons des mises à jour régulières par texto ou email sur l'état de votre animal de compagnie afin que vous puissiez vous détendre en sachant que votre animal est en bonnes mains.",
      },
    ],
  });

  return (
    <Layout title="Promenade">
      <ServiceDisplay infos={infos} />
    </Layout>
  );
  const [briefs, setBriefs] = useState({
    presentation:
      "Notre service de garderie canine en ligne offre une solution pratique et sécurisée pour les propriétaires occupés qui cherchent à confier leurs chiens à des professionnels qualifiés pendant leur absence. Nous proposons une large gamme de services, tels que la promenade quotidienne, le jeu et l'exercice, ainsi que l'alimentation et l'hydratation selon vos instructions. Nos gardiens de chiens expérimentés s'assureront que votre animal de compagnie reçoive toute l'attention et les soins dont il a besoin pour se sentir heureux et en sécurité. En utilisant notre service en ligne pratique, vous pouvez suivre l'emplacement de votre chien en temps réel et recevoir des mises à jour sur son bien-être. Faites confiance à notre service de garderie canine pour prendre soin de votre compagnon à fourrure pendant que vous êtes absent.",
    offersPresentation:
      "Notre service de garderie canine offre une variété d'options pour répondre aux besoins de votre chien. Nous proposons des promenades quotidiennes pour maintenir votre chien en forme et en bonne santé, ainsi que des sessions de jeu et d'exercice pour stimuler leur esprit et leur corps. Nous offrons également des services de nourriture et d'hydratation pour assurer le bien-être de votre animal de compagnie. En outre, nous proposons des options de soins personnalisés pour répondre aux besoins spécifiques de votre chien, comme les soins de toilette et les médicaments sur ordonnance. Quelle que soit l'option que vous choisissez, vous pouvez être assuré que votre chien recevra les meilleurs soins et une attention de qualité supérieure de la part de nos gardiens de chiens professionnels et expérimentés.",
    brief3: 'Vous trouverez dans cette rubrique, les offres disponibles',
    brief4:
      "Pourquoi ne pas profiter du sejour afin d'inculquer de bonnes manieres. Pour plus d'informations, priere de consulter la rubrique dressage",
    brief5: '',
  });
};

export default Petsitting;
