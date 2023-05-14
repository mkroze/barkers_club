import { MapPinIcon, ScissorsIcon } from '@heroicons/react/24/outline';
import { getError } from '../../utils/error';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
const MiniService = () => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const submitHandler = async ({ category, city }) => {
    try {
      router.push(`/Services/Partners?city=${city}&category=${category}`);
    } catch (error) {
      toast.error(getError(error));
    }
  };
  return (
    <div className="w-full px-4 py-12 sm:px-6 sm:py-16 ">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">
          Trouvez votre service
        </h1>

        <p className="mt-4 text-gray-500">
          Confiez votre animal de compagnie à nos soins experts
        </p>
      </div>

      <form
        onSubmit={handleSubmit(submitHandler)}
        className="mx-auto mt-8 mb-0 max-w-md space-y-4 "
      >
        <div className="flex justify-between">
          <div>
            <label for="email" className="sr-only">
              Service
            </label>

            <div className="relative">
              <select
                name="category"
                className="w-full  rounded-md"
                id="category"
                {...register('category')}
              >
                <option value="">Choisissez votre service</option>

                <option value="Toiletteur">Toiletteur</option>
                <option value="Petsitter">Petsitter</option>
                <option value="Eleveur de chiens">Eleveur de chiens</option>
                <option value="Dresseur">Dresseur</option>
                <option value="Promeneur">Promeneur</option>
              </select>

              <span className="absolute inset-y-0 right-0 grid place-content-center px-4">
                <ScissorsIcon className="w-6 h-6 text-green-600" />
              </span>
            </div>
          </div>

          <div>
            <label for="password" className="sr-only">
              Ville
            </label>

            <div className="relative">
              <select
                name="category"
                className="w-full  rounded-md"
                id="city"
                {...register('city')}
              >
                <option value="">Ville</option>
                <option value="Casablanca">Casablanca</option>
                <option value="Fes">Fes</option>
                <option value="Rabat">Rabat</option>
                <option value="Marrakech">Marrakech</option>
                <option value="Tanger">Tanger</option>
              </select>

              <span className="absolute inset-y-0 right-0 grid place-content-center px-4">
                <MapPinIcon className="w-6 h-6 text-green-600" />
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full">
          {/* <a href={`partners/${item.slug}`}></a> */}
          <button
            type="submit"
            className="inline-block rounded-lg bg-green-500 px-5 py-3 text-sm font-medium text-white"
          >
            Lancer la recherche
          </button>
        </div>
      </form>
    </div>
  );
};

export default MiniService;
