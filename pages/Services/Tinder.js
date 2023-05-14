import { useState } from 'react';
import PartnerForm from './Tinder/PartnerForm';
import AvailableLovers from './Tinder/AvailableLovers';
import db from '../../utils/db';
import Dog from '../../models/Dog';
import Layout from '../../components/Layout';
import ServiceDisplay from '../../components/indexComponents/ServiceDisplay';
const Tinder = () => {
  const [infos, setInfos] = useState({
    title: 'Recherche de partenaires',
    description: [
      "Le service de saillie est un service conçu pour les propriétaires de chiens qui cherchent à reproduire leur animal de compagnie. Ce service consiste en une assistance pour trouver un partenaire approprié pour votre chien, ainsi qu'une aide pour gérer toutes les étapes du processus de reproduction, du choix du partenaire à la naissance des chiots.",
      "Notre équipe expérimentée et passionnée s'assurera que votre animal soit en bonne santé et en sécurité tout au long du processus, en travaillant avec des vétérinaires qualifiés et en veillant à ce que les conditions soient adéquates pour une reproduction réussie. Nous nous engageons à offrir des solutions personnalisées pour répondre aux besoins spécifiques de chaque animal et à garantir que la saillie se déroule en toute sécurité et en toute transparence.",
      "Le service de saillie est une solution idéale pour les propriétaires qui cherchent à assurer la continuité de leur lignée ou à améliorer les traits de leur race. Il offre également une occasion de gagner de l'argent en vendant les chiots nés de la reproduction. N'hésitez pas à nous contacter pour plus d'informations sur ce service unique et pour discuter de vos options de reproduction",
    ],
    image:
      'https://images.unsplash.com/photo-1615233500147-5b196365bf3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nJTIwbW9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
    features: [
      'Sélection rigoureuse des meilleurs reproducteurs pour garantir la qualité de la portée',
      'Suivi régulier de la santé des chiens reproducteurs',
      'Assistance pour les démarches administratives liées à la reproduction',
      'Évaluation des besoins nutritionnels des reproducteurs',
      'Organisation des rencontres entre reproducteurs et soutien durant la gestation',
      "Suivi et mise à jour régulière de l'évolution de la gestation",
      'Surveillance et soins pour les chiots durant les premières semaines de vie',
      "Conseils pour les soins et l'éducation des chiots",
      'Programme de vaccination et vermifugation pour les chiots.',
    ],
    action: {
      brief1: 'Trouvez le partenaire idéal pour votre chien',
      brief2: 'Élevez une portée de chiots sains et heureux avec un partenaire adapté à votre chien.',
      title: 'Commencez la recherche',
      path: "./Partners/Maters"
    },
    testimonials: [
      {
        image:
          'https://images.unsplash.com/photo-1584184924103-e310d9dc82fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0aXNhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
        title: 'Expérience satisfaisante avec le service de mating',
        description:
          "Nous avons utilisé le service de accouplement pour notre chienne et nous sommes ravis du résultat. Les professionnels ont été très attentionnés et ont pris le temps de bien comprendre les besoins de notre animal. Les chiots sont en bonne santé et nous sommes reconnaissants d'avoir choisi ce service pour notre famille.",
        name: 'Tijani Alaoui',
        profession: 'Artisan',
      },
      {
        image:
          'https://images.unsplash.com/photo-1581094480465-4e6c25fb4a52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZW5naW5lZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60',
        title: 'Résultats surprenants avec le service de mating',
        description:
          "Nous avons été très satisfaits de la qualité du service de accouplement pour notre berger allemand. L'équipe était très compétente et a veillé à ce que tout se déroule sans accroc. Les chiots sont magnifiques et en excellente santé, nous recommandons ce service sans hésitation.",
        name: 'Mouad Lazraq',
        profession: 'Ingenieur',
        title0: 'Devenez accoupleur',
      path0: "./Partners/Register"
      },
      {
        image:
          'https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29uc3VsdGFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
        title: 'Un service de mating de qualité pour notre chien',
        description:
          "Le service de accouplement pour notre labrador a été une expérience formidable. Les professionnels ont été attentifs et ont pris soin de notre animal avec soin. Nous sommes ravis de la naissance de nos nouveaux chiots et nous remercions l'équipe pour leur excellent travail",
        name: 'Selma El Bakkali',
        profession: 'Consultant',
      },
    ],
    questions: [
      {
        question:
          "Comment choisir le bon partenaire pour l'accouplement de mon chien ?",
        answer:
          "Nous sommes là pour vous aider à choisir le bon partenaire pour votre chien. Nous prenons en compte la santé, la race, la personnalité et les antécédents de votre chien pour s'assurer que l'accouplement se passe sans problème.",
      },
      {
        question: "Comment se déroule l'accouplement ?",
        answer:
          "L'accouplement est surveillé de près par notre équipe professionnelle pour garantir la sécurité et le bien-être de tous les chiens impliqués. Nous nous assurons également que toutes les procédures nécessaires sont suivies pour garantir une grossesse en bonne santé.",
      },
      {
        question: 'Les chiots seront-ils en bonne santé ?',
        answer:
          'Oui, nous veillons à ce que les deux parents soient en bonne santé avant de les autoriser à se reproduire. De plus, les chiots seront examinés par un vétérinaire avant de les remettre à leur nouveau foyer.',
      },
    ],
  });

  const [displayed, setDisplayed] = useState(false);
  const handleClick = () => {
    setDisplayed(!displayed);
  };
  return (
    <Layout title="Recherche de partenaires">
      <ServiceDisplay infos={infos} />
    </Layout>
  );
};
export async function getServerSideProps() {
  await db.connect();
  const dogs = await Dog.find().lean();

  return {
    props: {
      dogs: dogs.map(db.convertDocToObj),
    },
  };
}
export default Tinder;
