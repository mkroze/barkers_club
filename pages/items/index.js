import Link from 'next/link';
import { Store } from '../../utils/Store';
import db from '../../utils/db';
import Item from '../../models/Item';
import { useContext } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout';
import BigTitle from '../../components/indexComponents/BigTitle';

export default function Shop(props) {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

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

  const addToCartHandler = async (product) => {
    const existItem = cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);

    if (data.countInStock < quantity) {
      return toast.error('Sorry. Product is out of stock');
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });

    // toast.success('Product added to the cart');
  };

  return (
    <Layout title="Boutique officielle">
      <BigTitle
        title="Boutique"
        description="Trouvez tous les produits et accessoires dont vous avez besoin pour prendre soin de votre chien"
      />
      <section className="mt-12 mx-auto px-4 max-w-screen-xl lg:px-8">
        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {props.items.map((item, index) => {
            return (
              <a href={`items/${item.slug}`}>
                <div className="flex items-center justify-center  px-4">
                  <div
                    className="max-w-sm  overflow-hidden rounded-xl bg-white shadow-md duration-200 
              flex flex-col justify-between
              hover:scale-105 hover:shadow-xl"
                  >
                    <h2 className="text-xl text-center text-green-600 font-semibold my-4">
                      {item.name}
                    </h2>
                    <div>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="object-contain rounded-md w-96 h-48 m-auto"
                      />
                    </div>
                    <div className="p-5">
                      
                      <p className="text-xl  text-center mb-2 text-green-700 h-3/4 border-md self-center">
                        {item.price} Dhs
                      </p>
                      <div className="my-2 m-auto justify-center flex flex- -ml-0.5 ">
                      
                          {printStars(item.rating).map((star) => star)}
                        
                        
                  
                      </div>
                      <button
                        className="w-full rounded-md bg-green-600 py-2 text-green-100 hover:bg-green-500 hover:shadow-md duration-75"
                        onClick={addToCartHandler}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
export async function getServerSideProps() {
  await db.connect();
  const items = await Item.find().lean();
  return {
    props: {
      items: items.map(db.convertDocToObj),
    },
  };
}
