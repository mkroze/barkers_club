import { useState } from 'react';
import Layout from '../../components/Layout';
import ServiceDisplay from '../../components/indexComponents/ServiceDisplay';
const Training = () => {
  const [infos, setInfos] = useState({
    title: 'Dressage',
    description: [
      "Le service de formation pour chiens est une solution idéale pour les propriétaires de chiens qui cherchent à renforcer les comportements de leur animal de compagnie et à améliorer sa qualité de vie. Que votre chien ait besoin d'apprendre de nouvelles commandes ou que vous souhaitiez travailler sur des problèmes de comportement spécifiques, notre équipe d'entraîneurs expérimentés est là pour vous aider.",
      "Nous offrons une variété de programmes de formation adaptés aux besoins de chaque chien. Que vous souhaitiez un entraînement en groupe ou individuel, nous avons la solution qui convient à votre animal de compagnie. Lors de chaque séance d'entraînement, votre chien bénéficiera d'un apprentissage stimulant et positif, qui renforcera sa confiance en lui et son obéissance.",
      "Notre équipe d'entraîneurs est passionnée par les chiens et a pour objectif de fournir les meilleurs résultats possible. Nous nous efforçons de travailler en étroite collaboration avec les propriétaires de chiens pour déterminer leurs besoins et leurs objectifs de formation. Ensemble, nous développons un plan d'entraînement personnalisé qui convient à la personnalité et aux comportements de votre chien.",
      "En choisissant notre service de formation pour chiens, vous pouvez être assuré que votre animal de compagnie recevra un entraînement de qualité supérieure qui l'aidera à devenir un compagnon plus obéissant et heureux. Nous sommes fiers de notre taux élevé de réussite et nous nous engageons à fournir les meilleurs résultats possibles pour chaque chien que nous formons.",
    ],
    image:
      'https://images.unsplash.com/photo-1551730459-92db2a308d6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nJTIwdHJhaW5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60',
    features: [
      'Programmes de formation sur mesure : nous nous adaptons à vos besoins en matière de formation et développons un programme personnalisé pour votre animal de compagnie.',
      'Entraîneurs qualifiés : nos entraîneurs sont des professionnels expérimentés qui aiment les animaux et connaissent les meilleures méthodes pour les former.',
      'Enseignement de bases : nous enseignons à votre chien les commandes de base telles que «assis», «coucher», «venir», et «reste».',
      'Correction du comportement : nous aidons à corriger les comportements indésirables tels que sauter, aboyer excessivement et autres comportements nuisibles.',
      'Socialisation : nous travaillons avec votre chien pour renforcer sa confiance envers les autres animaux et les gens.',
      'Marche en laisse : nous enseignons à votre chien à marcher en laisse de manière calme et contrôlée.',
      'Entraînement en distraction : nous enseignons à votre chien à rester concentré sur la formation, même en présence de distractions telles que les passants, les bruits forts et les autres animaux.',
      'Enseignement de tours : nous enseignons à votre chien des tours amusants et époustouflants qui impressionneront vos amis et votre famille.',
      'Soutien continu : nous sommes là pour vous aider à chaque étape du processus de formation, et nous vous fournissons des ressources supplémentaires pour aider à maintenir les progrès de votre chien.',
    ],
    action: {
      brief1: 'Éduquez votre chien avec des professionnels',
      brief2: 'Donnez à votre chien les compétences dont il a besoin pour être obéissant et heureux.',
      title: 'Contacter un dresseur',
      path: "./Partners/Trainers",
      title0: 'Devenez dresseur',
      path0: "./Partners/Register"
    },
    testimonials: [
      {
        image:
          'https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60',
        title: 'Transformation de chiot en compagnon bien éduqué',
        description:
          "Je suis tellement contente de la formation que mon chien a reçue. Il est plus calme et obéissant maintenant, et je peux enfin le promener en toute sécurité sans craindre qu'il ne se sauve. Le formateur était très compétent et patient, et je recommande vivement ce service à tous les propriétaires de chiens.",
        name: 'Aicha Lamrani',
        profession: 'propriétaire de chiens',
      },
      {
        image:
          'https://images.unsplash.com/photo-1537721664796-76f77222a5d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YWdyaWN1bHRvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
        title: 'Formation personnalisée pour un compagnon heureux',
        description:
          "J'ai été très satisfait de la formation pour mon berger allemand. Il est maintenant plus facile à contrôler et à dresser, ce qui rend mes journées de travail beaucoup plus simples et plus sûres. Je recommande vivement ce service pour tous les propriétaires de chiens de travail.",
        name: 'Aziz Chahir',
        profession: 'Agriculteur',
      },
      {
        image:
          'https://images.unsplash.com/photo-1644056347416-8180f2548fc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V3aWZlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
        title: 'Formation efficace pour un compagnon bien éduqué',
        description:
          'Mon petit chihuahua était très nerveux et agressif envers les autres chiens et les étrangers. Après avoir suivi la formation, il est maintenant beaucoup plus calme et sociable. Je suis tellement reconnaissante envers le formateur pour son aide, et je recommande ce service à tous les propriétaires de chiens ayant des problèmes de comportement.',
        name: 'Samira Bechar',
        profession: 'Mere au foyer',
      },
    ],
    questions: [
      {
        question:
          'Combien de temps faut-il pour voir des résultats de la formation ?',
        answer:
          " Le temps nécessaire pour voir des résultats de la formation dépend du chien et de ses problèmes de comportement. Certains problèmes peuvent être corrigés en quelques semaines, tandis que d'autres peuvent prendre plusieurs mois. Il est important de rester cohérent dans la formation et de continuer à travailler avec votre chien pour obtenir les meilleurs résultats.",
      },
      {
        question:
          'Quels sont les avantages de la formation en groupe par rapport à la formation individuelle ?',
        answer:
          "La formation en groupe offre une occasion pour les chiens de socialiser et de travailler sur leur comportement dans un environnement de groupe. Cela peut aider à améliorer leur comportement en public et à leur apprendre à interagir avec d'autres chiens. La formation individuelle, en revanche, est plus adaptée aux problèmes de comportement spécifiques ou pour les propriétaires qui ont des horaires chargés et qui ne peuvent pas assister à des cours de groupe.",
      },
      {
        question: 'Quel est le meilleur âge pour commencer à former un chien ?',
        answer:
          "Le meilleur âge pour commencer à former un chien est dès son plus jeune âge, idéalement entre 8 et 16 semaines. Les chiots sont plus réceptifs à l'apprentissage et ont une capacité d'attention plus courte, donc de courtes sessions d'entraînement fréquentes sont recommandées",
      },
    ],
  });

  return (
    <Layout title="Dressage">
      <ServiceDisplay infos={infos} />
    </Layout>
  );
};

export default Training;
