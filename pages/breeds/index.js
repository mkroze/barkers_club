import Link from 'next/link';
import { useContext } from 'react';
import { Store } from '../../utils/Store';
import db from '../../utils/db';
import Breed from '../../models/Breed';
import Layout from '../../components/Layout';
import BigTitle from '../../components/indexComponents/BigTitle';

const Encyclopedia = ( props ) => {
  function titleCase(str) {
    str = str.toLowerCase();
    str = str.split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' '); // ["I'm", "A", "Little", "Tea", "Pot"].join(' ') => "I'm A Little Tea Pot"
  }
  
  return (
    <Layout title="Encyclopedie canine">
      <BigTitle
        title="Encyclopédie"
        description="Apprenez tout sur les différentes races de chiens et leurs besoins spécifiques"
      />
      <section className="mt-12 mx-auto px-4 max-w-screen-xl lg:px-8">
        
        <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {props.breeds.map((breed, index) => {
            return (
              <article
                className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm"
                id={breed.title}
                key={index}
              >
                
                  <a href={`/breeds/${breed._id}`}>
                    <img
                      src={breed.img}
                      loading="lazy"
                      alt={breed.title}
                      className="w-full h-48 rounded-t-md"
                    />

                    <div className="pt-3 ml-4 mr-2 mb-3">
                    <h3 className="text-xl text-green-600 text-center font-bold ">
                        {titleCase(breed.title)}
                      </h3>
                      
                      <p className="text-gray-400 text-sm mt-1">
                        {breed.brief.substr(0, 210).concat('...')}
                      </p>
                    </div>
                  </a>
                
              </article>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};
export async function getServerSideProps() {
  await db.connect();
  const breeds = await Breed.find().lean();
  console.log('server side');
  console.log(breeds.map((breed) => breed.title));
  return {
    props: {
      breeds: breeds.map(db.convertDocToObj),
    },
  };
}
export default Encyclopedia;
