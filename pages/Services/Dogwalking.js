import { useState } from 'react';
import Offers from '../../components/indexComponents/Offers';
import Layout from '../../components/Layout';
import ServiceDisplay from '../../components/indexComponents/ServiceDisplay';
const Dogwalking = () => {
  const [infos, setInfos] = useState({
    title: 'Programme de promenades',
    description: [
      "Le service de promenade de chien est essentiel pour les propriétaires de chiens qui n'ont pas assez de temps pour les sortir régulièrement. Cette activité offre de nombreux avantages pour le bien-être et la santé de votre animal. La promenade quotidienne permet de dépenser de l'énergie, de renforcer les muscles et de stimuler les sens de votre chien. C'est également l'occasion pour votre animal de rencontrer d'autres chiens et d'interagir avec son environnement, ce qui peut renforcer sa confiance et son bien-être général.",
      "Notre équipe de marcheurs de chiens expérimentés assurera que votre animal reçoive une promenade sûre et amusante. Nous nous adaptons à vos besoins et à ceux de votre animal, en fonction de son niveau d'énergie, de son âge et de son état de santé. Nous prenons le temps de comprendre les routines et les préférences de votre animal, afin de lui offrir une expérience personnalisée et agréable.",
      'Nous sommes fiables et flexibles, offrant des options de promenade quotidienne, hebdomadaire ou occasionnelle selon vos besoins. Vous pouvez compter sur nous pour vous tenir informé de la progression de votre animal et pour vous garantir une communication transparente et ouverte.',
      "Si vous cherchez un moyen de garantir que votre animal reçoive l'exercice et les soins dont il a besoin pour rester heureux et en bonne santé, le service de promenade de chien est un choix idéal. Contactez-nous dès aujourd'hui pour en savoir plus sur nos options de promenade et pour nous permettre de prendre soin de votre animal.",
    ],
    image:
      'https://images.unsplash.com/photo-1626982998101-037a46a8367b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nJTIwd2Fsa3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    features: [
      'Équipe qualifiée et passionnée de marcheurs de chiens',
      'Promenades quotidiennes pour les chiens de toutes races et tailles',
      "Flexibilité pour s'adapter aux horaires de travail et aux besoins de chaque chien",
      'Marche en petits groupes pour une attention individualisée pour chaque chien',
      'La sécurité et le bien-être des chiens sont une priorité absolue',
      'Des moyens de suivi pour surveiller les progrès des chiens et les habitudes de marche',
      'Des options de transport pour les chiens depuis et vers leur domicile ou la maison',
      'Des tarifs abordables pour les promenades régulières ou occasionnelles',
      'Des moyens pour les propriétaires de chiens de suivre et de communiquer avec les marcheurs de chiens.',
    ],
    action: {
      brief1: 'Promenez votre chien dès aujourd\'hui',
      brief2: 'Donnez à votre chien la promenade dont il a besoin pour rester heureux et en bonne santé.',
      title: 'Promenez votre chien',
      path: "./Partners/Walkers",
      title0: 'Devenez promeneur',
      path0: "./Partners/Register"
    },
    testimonials: [
      {
        image:
          'https://images.unsplash.com/photo-1642911353098-42efaae7f6d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGF3eWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
        title: 'Une benediction',
        description:
          "Ma chienne est devenue plus calme et plus obéissante depuis qu'elle participe aux promenades quotidiennes organisées par ce service. Je suis très satisfait des résultats.",
        name: 'Aicha Raki',
        profession: 'Lawyer',
      },
      {
        image:
          'https://images.unsplash.com/photo-1582902281019-484e409da5e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9saWNlbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
        title: 'Un grand merci',
        description:
          "Depuis que je fais appel à ce service de promenade pour mon chien, je n'ai plus à me soucier de trouver des moments pour l'emmener se dépenser. Les promeneurs sont fiables et mon chien les adore.",
        name: 'Maati El Ghazi ',
        profession: 'Policier',
      },
      {
        image:
          'https://images.unsplash.com/photo-1540253541309-85613ea41097?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmlyZW1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
        title: 'Un service ombe du ciel',
        description:
          "J'ai fait appel aux services de promenade pour mon chien pendant plusieurs mois et je suis très satisfait. Mon chien adore les promenades et revient toujours heureux et épuisé. Les promeneurs sont attentionnés et professionnels.",
        name: 'Mstapha Ezzouine',
        profession: 'Pompier',
      },
    ],
    questions: [
      {
        question: 'Comment ça se passe une promenade pour mon chien ?',
        answer: "Nous prenons en charge votre chien et l'emmenons pour une promenade agréable et sécurisée dans un endroit approprié. Nous veillons à ce que votre chien soit hydraté et nourri si nécessaire, et nous veillons à son bien-être à tout moment.",
      },
      {
        question: 'Quelle est la durée des promenades pour les chiens ?',
        answer: 'Les durées des promenades pour les chiens peuvent varier en fonction de vos besoins et de ceux de votre animal de compagnie. Nous pouvons vous proposer des promenades de 30 minutes à 1 heure, selon vos préférences.',
      },
      {
        question: 'Mon chien est très actif, est-ce que vous pouvez gérer ça ?',
        answer: "Bien sûr, nous avons l'expérience nécessaire pour gérer les chiens actifs et nous nous engageons à leur fournir une expérience agréable et sécurisée lors de leur promenade. Nous veillons à ce que votre chien soit stimulé et satisfait pendant toute la promenade.",
      },
    ],
  });

  return (
    <Layout title="Promenade">
      <ServiceDisplay infos={infos} />
    </Layout>
  );
};

export default Dogwalking;
