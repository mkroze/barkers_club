import db from '../../utils/db';
import Breed from '../../models/Breed';
import axios from 'axios';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';

const Dog = (props) => {
  const { breed } = props;
  // // console.log(breed._id);
  return (
    <Layout title="Race">
      <section className="my-12 mx-auto px-4 w-1/2 lg:px-8">
        <h2 className="text-3xl text-green-700 font-bold my-3 text-center">
          {breed.title}
        </h2>
        <img src={breed.img} alt={breed.title} className="rounded-xl" />
        <div className="text-center">
          <h2 className="text-2xl text-green-600 font-semibold mt-3">
            Breve presentation
          </h2>
          <p className="text-justify mt-3 text-gray-500">{breed.brief}</p>

          <h2 className="text-2xl text-green-600 font-semibold mt-3">
            Histoire de la race
          </h2>
          <p className="text-justify mt-3 text-gray-500">{breed.history}</p>

          <h2 className="text-2xl text-green-600 font-semibold mt-3">
            Particularites physiques
          </h2>
          <p className="text-justify mt-3 text-gray-500">{breed.physical}</p>

          <h2 className="text-2xl text-green-600 font-semibold mt-3">
            Comportement et caractère
          </h2>
          <p className="text-justify mt-3 text-gray-500">{breed.behaviour}</p>

          <h2 className="text-2xl text-green-600 font-semibold mt-3">
            Education et dressage
          </h2>
          <p className="text-justify mt-3 text-gray-500">{breed.education}</p>

          <h2 className="text-2xl text-green-600 font-semibold mt-3">
            Conditions de vie
          </h2>
          <p className="text-justify mt-3 text-gray-500">{breed.condition}</p>

          <h2 className="text-2xl text-green-600 font-semibold mt-3">Sante</h2>
          <p className="text-justify mt-3 text-gray-500">{breed.health}</p>

          <h2 className="text-2xl text-green-600 font-semibold mt-3">
            Esperance de vie
          </h2>
          <p className="text-justify mt-3 text-gray-500">{breed.lifespan}</p>

          <h2 className="text-2xl text-green-600 font-semibold mt-3">
            Entretien et hygiene
          </h2>
          <p className="text-justify mt-3 text-gray-500">{breed.hygiene}</p>

          <h2 className="text-2xl text-green-600 font-semibold mt-3">
            Alimentation
          </h2>
          <p className="text-justify mt-3 text-gray-500">{breed.food}</p>

          <h2 className="text-2xl text-green-600 font-semibold mt-3">
            Activite physique
          </h2>
          <p className="text-justify mt-3 text-gray-500">{breed.activity}</p>
        </div>
      </section>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  
  const { params } = context;
  const { id } = params;
  
  await db.connect();

  const breed = await Breed.findById( id ).lean();
  console.log(breed.title);
  
  return {
    props: {
      breed: breed ? db.convertDocToObj(breed) : null,
    },
  };
}

export default Dog;
