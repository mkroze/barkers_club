import Layout from '../../components/Layout';
import Item from '../../models/Item';
import db from '../../utils/db';
import { useContext } from 'react';
import { Store } from '../../utils/Store';
import { useRouter } from 'next/router';
import axios from 'axios';

const printStars = (rating) => {
  // Initialize the string of stars
  let stars = [];
  rating = Math.floor(rating) + 1;

  // Add yellow stars for the rating
  for (let i = 0; i < rating; i++) {
    stars.push(
      <svg
        className="w-5 h-5 text-green-400"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    );
  }

  // Add white stars for any remaining stars
  for (let i = rating; i < 5; i++) {
    stars.push(
      <svg
        className="w-5 h-5 text-gray-200"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    );
  }
  console.log(stars);
  return stars;
};

const ItemScreen = (props) => {
  const { item } = props;
  const { state, dispatch } = useContext(Store);
  const router = useRouter();
  if (!item) {
    return <Layout title="Produit introuvable">Produit introuvable</Layout>;
  }

  const addToCartHandler = async () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === item.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/items/${item._id}`);

    if (data.countInStock < quantity) {
      return toast.error('Sorry. item is out of stock');
    }

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...item, quantity } });
    console.log('dispatch done');
    router.push('/Cart');
  };
  return (
    <Layout title="Article">
      <section>
        <div className="relative max-w-screen-xl px-4 py-8 mx-auto">
          <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-1 bg-green-600 rounded-xl">
              <img
                alt="Les Paul"
                src={item.image}
                className="object-cover max-h-96 aspect-square m-auto my-auto"
              />
            </div>

            <div className="sticky top-0">
              <div className="flex justify-between w-5/6">
                <div className="max-w-[35ch] ">
                  <h1 className="text-2xl font-bold">{item.name}</h1>

                  <p className="mt-0.5 text-sm">{item.brand}</p>

                  <div className="mt-2 -ml-0.5 flex ">
                    {printStars(item.rating).map((star) => star)}{' '}
                    <span className="text-xs my-auto mx-3">
                      of {item.numReviews} reviews
                    </span>
                  </div>
                </div>

                <p className="text-lg font-bold">{item.price} Dhs</p>
              </div>

              <details className="group relative mt-4 [&_summary::-webkit-details-marker]:hidden">
                <summary className="block">
                  <div>
                    <div className="prose max-w-none group-open:hidden">
                      <p className="text-justify w-5/6 ">{item.description}</p>
                    </div>
                  </div>
                </summary>
              </details>

              <div className="mt-8 w-5/6">
                <div className="flex justify-end mt-8">
                  <button
                    onClick={addToCartHandler}
                    className="px-5 py-3 text-md font-medium text-white bg-green-600 rounded hover:bg-green-500"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;

  await db.connect();
  const item = await Item.findOne({ slug }).lean();
  return {
    props: {
      item: item ? db.convertDocToObj(item) : null,
    },
  };
}

export default ItemScreen;
