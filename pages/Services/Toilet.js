import Layout from "../../components/Layout"
import { useState } from "react";
import ServiceDisplay from "../../components/indexComponents/ServiceDisplay";

const Toilet = () => {
    const [infos, setInfos] = useState({
        title: 'Toilettage',
        description: [
          "Notre service de toilettage pour chiens est la solution idéale pour que votre compagnon soit propre, bien soigné et en bonne santé. Nous nous engageons à offrir un service de qualité supérieure pour répondre aux besoins de chaque chien. Nos toiletteurs qualifiés ont une expérience considérable dans ce domaine et sont en mesure de s'adapter à toutes les races et à toutes les tailles de chiens.",
          "Nous offrons une gamme complète de services de toilettage pour chiens, qui comprend la coupe des ongles, le nettoyage des oreilles, le brossage des dents, le toilettage des poils, le bain, le séchage et le démêlage des poils. Nous sommes en mesure d'adapter nos services en fonction des besoins de votre chien, que ce soit pour une coupe de poils d'été ou pour une toilettage complet avant un concours canin.",
          "Les avantages de notre service de toilettage pour chiens sont nombreux. Tout d'abord, il garantit que votre chien sera propre et bien soigné, ce qui est essentiel pour sa santé et son bien-être. De plus, le toilettage régulier peut prévenir les problèmes de peau et les infections des oreilles. Enfin, un chien bien toiletté est plus agréable à vivre et sera apprécié de tous les membres de la famille.",
          "",
        ],
        image:
          'https://images.unsplash.com/photo-1528846596754-23db743ea0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGRvZyUyMGdyb29taW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
        features: [
          'Qualité supérieure',
          'Services adaptés à chaque race',
          'Démêlage des poils',
          'Séchage',
          'Bain',
          'Toilettage des poils',
          'Brossage des dents',
          'Nettoyage des oreilles',
          'Coupe des ongles',
        ],
        action: {
          brief1: ' Réservez une session de toilettage pour votre chien aujourd\'hui !',
          brief2: 'Donnez à votre chien le traitement qu\'il mérite grâce à notre service de toilettage professionnel.',
          title: 'Réserver maintenant',
          path: "./Partners/Toileters",
          title0: 'Devenez Toiletteur',
      path0: "./Partners/Register"
        },
        testimonials: [
          {
            image:
              'https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60',
            title: 'La satisfaction de Fatima',
            description:
              "Je suis très contente du service de toilettage de chiens que j'ai reçu. Mon chien a l'air si mignon et il sent bon !",
            name: 'Fatima Liraki',
            profession: 'Enseignante',
          },
          {
            image:
              'https://images.unsplash.com/photo-1537721664796-76f77222a5d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YWdyaWN1bHRvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
            title: 'Le témoignage d\'Ahmed',
            description:
              "J'ai été très impressionné par la qualité du travail de toilettage de mon chien. Le toiletteur était très professionnel et mon chien est revenu propre et bien soigné.",
            name: 'Aziz Taoussi',
            profession: 'Dentiste',
          },
          {
            image:
              'https://images.unsplash.com/photo-1644056347416-8180f2548fc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V3aWZlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
            title: 'Sara recommande vivement',
            description:
              'Je recommande vivement ce service de toilettage de chiens. Le personnel est très compétent et ils ont vraiment pris soin de mon chien. Je suis très satisfaite du résultat.',
            name: 'Sanaa Bachir',
            profession: 'Ingenieure BTP',
          },
        ],
        questions: [
          {
            question:
              "Quels sont les produits de toilettage utilisés pour mon chien ?",
            answer:
              "Nous utilisons uniquement des produits de toilettage de haute qualité et sûrs pour les animaux domestiques. Nous pouvons également utiliser des produits spécifiques pour répondre aux besoins de la peau ou des poils de votre chien, si nécessaire. Nous sommes toujours prêts à répondre à toutes les questions que vous pourriez avoir concernant les produits de toilettage que nous utilisons.",
          },
          {
            question:
              "Combien de temps prendra le toilettage de mon chien ?",
            answer:
              "La durée du toilettage dépend de la taille et du type de poils de votre chien, ainsi que des services que vous avez demandés. En général, le toilettage prend entre une heure et demie à trois heures.",
          },
          {
            question: 'Quels sont les services de toilettage disponibles pour mon chien ?',
            answer:
              " Nous offrons un large éventail de services de toilettage pour répondre aux besoins individuels de chaque chien. Cela comprend le brossage, le bain, la coupe des poils, la coupe des ongles, le nettoyage des oreilles et des glandes anales, et plus encore.",
          },
        ],
      });
    return ( <Layout title="Toilettage">
        <ServiceDisplay infos={infos} />
    </Layout> );
}
 
export default Toilet;