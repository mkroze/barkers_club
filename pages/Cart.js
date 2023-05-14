import dynamic from 'next/dynamic';
import Layout from '../components/Layout';
import { useContext } from 'react';
import { Store } from '../utils/Store';
import { useRouter } from 'next/router';
import axios from 'axios';
import { toast } from 'react-toastify';
import BigTitle from '../components/indexComponents/BigTitle';

const Cart = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

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

  const removeItemHandler = (item) => {
    dispatch({ type: 'CART_REMOVE_ITEM', payload: item });
  };
  const updateCartHandler = async (item, qty) => {
    const quantity = Number(qty);
    const { data } = await axios.get(`/api/items/${item._id}`);
    console.log(data);
    if (data.countInStock < quantity) {
      return toast.error('Sorry. Product is out of stock');
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...item, quantity } });
    toast.success('Product updated in the cart');
  };

  return (
    <Layout title="Panier">
      <BigTitle
        title="Panier"
        description="Vérifiez les articles que vous avez sélectionnés et procédez à l'achat"
      />
      {cartItems.length === 0 ? (
        <div>
          Cart is empty. <a href="/items">Go shopping</a>
        </div>
      ) : (
        <body>
          <div className="pt-20">
                        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
              {/* Items on Cart */}
              <div className="rounded-lg md:w-2/3">
                {cartItems.map((item) => {
                  return (
                    <div className="border-green-600 border h-54 justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="object-contain rounded-lg sm:w-40 "
                      />
                      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                        <div className="mt-5 sm:mt-0">
                          <h2 className="text-lg font-bold text-green-600">
                            {item.name}
                          </h2>
                          <p className="text-xs font-semi text-gray-900">
                            {item.brand}
                          </p>
                          <div className="mt-2 -ml-0.5 flex">
                            {printStars(item.rating).map((star) => star)}{' '}
                            <span className="text-xs my-auto mx-3">
                              of {item.numReviews} reviews
                            </span>
                          </div>
                        </div>
                        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                          <div className="flex items-center border-gray-100">
                            <select
                              className="rounded-lg"
                              value={item.quantity}
                              onChange={(e) =>
                                updateCartHandler(item, e.target.value)
                              }
                            >
                              {[...Array(item.countInStock).keys()].map((x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="flex items-center space-x-4">
                            <p className="text-sm">{item.price} MAD</p>
                            <button onClick={() => removeItemHandler(item)}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* Side menu with info and actions  */}
              <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                <div className="mb-2 flex justify-between">
                  <p className="text-gray-700">
                    Sous-total ({cartItems.reduce((a, c) => a + c.quantity, 0)}){' '}
                  </p>
                  <p className="text-gray-700">
                    {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}{' '}
                    MAD
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-700">Livraison</p>
                  <p className="text-gray-700">50 MAD</p>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between">
                  <p className="text-lg font-bold">Total</p>
                  <div className="">
                    <p className="mb-1 text-lg font-bold">
                      {cartItems.reduce((a, c) => a + c.quantity * c.price, 50)}{' '}
                      MAD
                    </p>
                    <p className="text-sm text-gray-700">TVA incluse</p>
                  </div>
                </div>
                <button 
                className="mt-6 w-full rounded-md bg-green-500 py-1.5 font-medium text-blue-50 hover:bg-green-600"
                onClick={() => router.push('shipping')}>
                  Paiement
                </button>
              </div>
            </div>
          </div>
        </body>
      )}
    </Layout>
  );
};

// export default Cart;
export default dynamic(() => Promise.resolve(Cart), { ssr: false });
