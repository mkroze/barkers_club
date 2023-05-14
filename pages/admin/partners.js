import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useReducer } from 'react';
import { toast } from 'react-toastify';
import Layout from '../../components/Layout';
import { getError } from '../../utils/error';
import SideMenu from '../../components/adminComponent/SideMenu'
function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, partners: action.payload, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    case 'CREATE_REQUEST':
      return { ...state, loadingCreate: true };
    case 'CREATE_SUCCESS':
      return { ...state, loadingCreate: false };
    case 'CREATE_FAIL':
      return { ...state, loadingCreate: false };
    case 'DELETE_REQUEST':
      return { ...state, loadingDelete: true };
    case 'DELETE_SUCCESS':
      return { ...state, loadingDelete: false, successDelete: true };
    case 'DELETE_FAIL':
      return { ...state, loadingDelete: false };
    case 'DELETE_RESET':
      return { ...state, loadingDelete: false, successDelete: false };

    default:
      state;
  }
}
export default function AdminProdcutsScreen() {
  const router = useRouter();

  const [
    { loading, error, partners, loadingCreate, successDelete, loadingDelete },
    dispatch,
  ] = useReducer(reducer, {
    loading: true,
    partners: [],
    error: '',
  });

  const createHandler = async () => {
    if (!window.confirm('Are you sure?')) {
      return;
    }
    try {
      dispatch({ type: 'CREATE_REQUEST' });
      const { data } = await axios.post(`/api/admin/partners`);
      dispatch({ type: 'CREATE_SUCCESS' });
      toast.success('Partner created successfully');
      router.push(`/admin/partner/${data.partner._id}`);
    } catch (err) {
      dispatch({ type: 'CREATE_FAIL' });
      toast.error(getError(err));
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/admin/partners`);
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };

    if (successDelete) {
      dispatch({ type: 'DELETE_RESET' });
    } else {
      fetchData();
    }
  }, [successDelete]);

  const deleteHandler = async (partnerId) => {
    if (!window.confirm('Are you sure?')) {
      return;
    }
    try {
      dispatch({ type: 'DELETE_REQUEST' });
      await axios.delete(`/api/admin/partners/${partnerId}`);
      dispatch({ type: 'DELETE_SUCCESS' });
      toast.success('Partner deleted successfully');
    } catch (err) {
      dispatch({ type: 'DELETE_FAIL' });
      toast.error(getError(err));
    }
  };
  return (
    <Layout title="Admin Partners">
      <div className="grid md:grid-cols-4 md:gap-5">
      <SideMenu step={5} />
        <div className="overflow-x-auto md:col-span-3">
          <div className="flex justify-between">
            <h1 className="mb-4 text-xl">Partners</h1>
            {loadingDelete && <div>Deleting partner...</div>}
            <button
              disabled={loadingCreate}
              onClick={createHandler}
              className="mt-6  rounded-md bg-green-500 py-1.5 font-medium text-blue-50 hover:bg-green-600"
            >
              {loadingCreate ? 'Loading' : 'Create'}
            </button>
          </div>
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div className="alert-error">{error}</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="border-b">
                  <tr className='rounded-md'>
                    <th className="px-5 text-left bg-green-200 rounded-l-md">ID</th>
                    <th className="p-5 text-left bg-green-200">Nom</th>
                    <th className="p-5 text-left bg-green-200">Prix</th>
                    <th className="p-5 text-left bg-green-200">Catégorie</th>
                    <th className="p-5 text-left bg-green-200">Location</th>
                    <th className="p-5 text-left bg-green-200">Telephone</th>
                    <th className="p-5 text-left bg-green-200">Note</th>
                    
                    <th className="p-5 text-left bg-green-200">Disponibilite</th>
                    <th className="p-5 text-left bg-green-200 rounded-r-md">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {partners.map((partner) => (
                    <tr key={partner._id} className="border-b">
                      <td className=" p-5 w-[11%]">{partner._id.substring(20, 24)}</td>
                      <td className=" p-5 w-[11%] ">{partner.name}</td>
                      <td className=" p-5 w-[11%] ">${partner.price}</td>
                      <td className=" p-5 w-[11%] ">{partner.category}</td>
                      <td className=" p-5 w-[11%] ">{partner.location}</td>
                      <td className=" p-5 w-[11%] ">{partner.phone}</td>
                      <td className=" p-5 w-[11%] ">{partner.rating}</td>
                      <td className=" p-5 w-[11%] ">{partner.availability}</td>
                      <td className=" p-5 w-[11%] ">
                        <Link href={`/admin/partner/${partner._id}`}>
                          <a type="button" className="mt-6 rounded-md bg-green-500 py-1.5 font-medium text-blue-50 hover:bg-green-600">
                            Edit
                          </a>
                        </Link>
                        &nbsp;
                        <button
                          onClick={() => deleteHandler(partner._id)}
                          className="mt-6 rounded-md bg-green-500 py-1.5 font-medium text-blue-50 hover:bg-green-600"
                          type="button"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

AdminProdcutsScreen.auth = { adminOnly: true };