import { info } from "autoprefixer";

const SomeNumbers = ({ infos }) => {
  return (
    <section className="bg-white">
  <div className="mx-auto max-w-screen-xl px-4  sm:px-6 md:py-16 lg:px-8">
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-3xl font-bold text-green-600 sm:text-4xl">
      Notre succès en chiffres
      </h2>

      <p className="mt-4 text-gray-500 sm:text-xl">
      Voici quelques chiffres clés qui démontrent notre succès et notre engagement envers les propriétaires de chiens au Maroc:
      </p>
    </div>

    <div className="mt-8 sm:mt-12">
      <dl className="grid grid-cols-4 gap-4 ">
        {infos.map(info=>{return <div
          className="flex flex-col bg-gray-50 rounded-lg border border-gray-100 px-4 py-8 text-center"
        >
          <dt className="order-last text-lg font-medium text-gray-500">
            {info.statistic}
          </dt>

          <dd className="text-4xl font-extrabold text-green-600 md:text-5xl">
            {info.number}
          </dd>
        </div>})}
        
      </dl>
    </div>
  </div>
</section>

  );
};

export default SomeNumbers;
