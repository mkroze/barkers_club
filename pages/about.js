import { useState } from 'react';
import Testimonals from '../components/indexComponents/Testimonials';
import Section from '../components/indexComponents/Section';
import SomeNumbers from '../components/indexComponents/SomeNumbers';
import SocialMedia from '../components/indexComponents/SocialMedia';
import VideoZone from '../components/indexComponents/VideoZone';
import Layout from '../components/Layout.js';
import BigTitle from '../components/indexComponents/BigTitle';
const About = () => {
  const [briefs, setBriefs] = useState({
    history: {
      image:
        'https://images.unsplash.com/photo-1561650983-da1423904f5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmFieSUyMGRvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
      title1: 'Début de notre aventure',
      title2: 'Notre mission',
      description1:
        "La création du Barkers Club a débuté il y a plusieurs années, lorsque Abdenasser et moi, tous deux passionnés de chiens, ont réalisé qu'il était difficile pour les propriétaires de chiens au Maroc de trouver les informations et les services nécessaires pour prendre soin de leurs animaux de compagnie. Ils ont décidé de combiner leurs connaissances et leur passion pour les chiens pour créer un site web dédié à aider les propriétaires de chiens au Maroc.",
      description2:
        "Notre site web a été lancé avec l'objectif de fournir une encyclopédie complète des races de chiens, ainsi qu'une boutique en ligne pour tous les besoins en matière de nourriture, d'accessoires et de soins pour chiens. Nous avons rapidement élargi notre offre en ajoutant des services de garde de chiens, de dressage et de promenades pour les chiens.",
      description3:
        'Au fil des années, notre communauté en ligne a grandi et nous avons reçu des témoignages positifs de nos clients, ce qui nous a motivé à continuer à améliorer notre site web pour répondre aux besoins des propriétaires de chiens au Maroc. Nous sommes fiers de pouvoir offrir des services de qualité, des produits de qualité supérieure et des conseils professionnels pour les propriétaires de chiens au Maroc. Nous sommes déterminés à continuer à évoluer pour devenir la meilleure ressource pour les propriétaires de chiens au Maroc.',
    },
    teams:
      'Notre site internet se charge de subvenir aux eventuels besoins des proprietaires de chiens dans tout le royaume.',
    mission:
      'Notre site web a été créé pour répondre aux besoins spécifiques des propriétaires de chiens au Maroc. Nous comprenons les défis uniques auxquels les propriétaires de chiens font face ici, et nous avons conçu notre site pour offrir des solutions et des conseils pertinents pour les surmonter.',
    socialProof: [
      {
        number: '2500',
        statistic: 'Ventes par mois',
      },
      {
        number: '18',
        statistic: 'Races de chien ',
      },
      {
        number: '450',
        statistic: 'Membres ',
      },
      {
        number: '4',
        statistic: 'Services ',
      },
    ],
    contactForm:
      'Si vous etes deja proprietaire, la boutique officielle du bakers club vous proposera les articles indispensables au bien etre de votre chien.',
    video:
      'https://images.unsplash.com/photo-1529234620254-a0d21fd98c19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nJTIwb24lMjBncmFzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    gallery: [
      {
        name: 'Kasmi Mohamed Yacine',
        profession: 'Ingenieur en Microelectronique',
        image:
          'https://images.unsplash.com/photo-1602493054376-d9dc3dfcbc7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWljcm9lbGVjdHJvbmljc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
        title:
          "Le maroc a besoin d'une plateforme en ligne pour les maitres canins",
        description:
          "j'ai grandi entouré de chiens et j'ai toujours eu un amour profond pour ces animaux. En grandissant, j'ai réalisé que beaucoup de propriétaires de chiens au Maroc avaient des difficultés à trouver les informations et les services nécessaires pour prendre soin de leurs animaux de compagnie. ",
      },
      {
        name: 'Rahim Abdenassr',
        profession: 'Developpeur fullstack',
        image:
          'https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdlYiUyMGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
        title: "Yacine avait besoin d'un coup demain ",
        description:
          " j'ai toujours été passionné par les animaux de compagnie. En tant que propriétaire de chien moi-même, j'ai réalisé qu'il était difficile de trouver des services de qualité pour prendre soin de mon chien au Maroc.",
      },
    ],
    socialMediaLinks: {},
  });
  const {
    history,
    teams,
    mission,
    socialProof,
    contactForm,
    video,
    gallery,
    socialMediaLinks,
  } = briefs;
  return (
    <Layout title={'About us'}>
      <BigTitle
        title="À propos de nous"
        description="En savoir plus sur notre histoire, nos objectifs et notre engagement envers les propriétaires de chiens au Maroc"
      />

      <Section info={history} />
      <SomeNumbers infos={socialProof} />
      <Testimonals socialProof={gallery} />
      <VideoZone />
      <SocialMedia />
    </Layout>
  );
};

export default About;
