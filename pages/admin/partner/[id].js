import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useReducer } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Layout from '../../../components/Layout';
import { getError } from '../../../utils/error';
import SideMenu from '../../../components/adminComponent/SideMenu';
function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };

    case 'UPDATE_REQUEST':
      return { ...state, loadingUpdate: true, errorUpdate: '' };
    case 'UPDATE_SUCCESS':
      return { ...state, loadingUpdate: false, errorUpdate: '' };
    case 'UPDATE_FAIL':
      return { ...state, loadingUpdate: false, errorUpdate: action.payload };

    case 'UPLOAD_REQUEST':
      return { ...state, loadingUpload: true, errorUpload: '' };
    case 'UPLOAD_SUCCESS':
      return {
        ...state,
        loadingUpload: false,
        errorUpload: '',
      };
    case 'UPLOAD_FAIL':
      return { ...state, loadingUpload: false, errorUpload: action.payload };

    default:
      return state;
  }
}
export default function AdminPartnerEditScreen() {
  const { query } = useRouter();
  const partnerId = query.id;
  const [{ loading, error, loadingUpdate, loadingUpload }, dispatch] =
    useReducer(reducer, {
      loading: true,
      error: '',
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/admin/partners/${partnerId}`);
        dispatch({ type: 'FETCH_SUCCESS' });
        
        setValue('image', data.image);
        setValue('name', data.name);
        setValue('category', data.category);
        setValue('description', data.description);
        setValue('location', data.location);
        setValue('phone', data.phone);
        setValue('price', data.price);
        setValue('availability', data.availability);
        setValue('rating', data.rating);

      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };

    fetchData();
  }, [partnerId, setValue]);

  const router = useRouter();

  const uploadHandler = async (e, imageField = 'image') => {
    const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`;
    try {
      dispatch({ type: 'UPLOAD_REQUEST' });
      const {
        data: { signature, timestamp },
      } = await axios('/api/admin/cloudinary-sign');

      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('file', file);
      formData.append('signature', signature);
      formData.append('timestamp', timestamp);
      formData.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY);
      const { data } = await axios.post(url, formData);
      dispatch({ type: 'UPLOAD_SUCCESS' });
      setValue(imageField, data.secure_url);
      toast.success('File uploaded successfully');
    } catch (err) {
      dispatch({ type: 'UPLOAD_FAIL', payload: getError(err) });
      toast.error(getError(err));
    }
  };

  const submitHandler = async ({
    image,
    name,
    category,
    description,
    location,
    phone,
    price,
    availability,
    rating, }) => {
    try {
      dispatch({ type: 'UPDATE_REQUEST' });
      await axios.put(`/api/admin/partners/${partnerId}`, {
        image,
        name,
        category,
        description,
        location,
        phone,
        price,
        availability,
        rating,
      });
      dispatch({ type: 'UPDATE_SUCCESS' });
      toast.success('Partner updated successfully');
      router.push('/admin/partners');
    } catch (err) {
      dispatch({ type: 'UPDATE_FAIL', payload: getError(err) });
      toast.error(getError(err));
    }
  };

  return (
    <Layout title={`Edit Partner ${partnerId}`}>
      <div className="grid md:grid-cols-4 md:gap-5">
        <SideMenu step={5} />
        <div className="md:col-span-3">
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div className="alert-error">{error}</div>
          ) : (
            <form
              className="mx-auto max-w-screen-md"
              onSubmit={handleSubmit(submitHandler)}
            >
              <h1 className="mb-4 text-xl">{`Edit Partner ${partnerId}`}</h1>
              
              <div className="mb-4">
                <label htmlFor="image">Image</label>
                <input
                  type="text"
                  className="w-full rounded-md"
                  id="image"
                  {...register('image', {
                    required: 'Please enter image',
                  })}
                />
                {errors.image && (
                  <div className="text-red-500">{errors.image.message}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="imageFile">Upload image</label>
                <input
                  type="file"
                  className="w-full  rounded-md"
                  id="imageFile"
                  onChange={uploadHandler}
                />

                {loadingUpload && <div>Uploading....</div>}
              </div>
              <div className="mb-4">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="w-full  rounded-md"
                  id="name"
                  {...register('name', {
                    required: 'Please enter name',
                  })}
                />
                {errors.name && (
                  <div className="text-red-500">{errors.name.message}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="category">Category</label>
                <input
                  type="text"
                  className="w-full  rounded-md"
                  id="category"
                  {...register('category', {
                    required: 'Please enter category',
                  })}
                />
                {errors.category && (
                  <div className="text-red-500">{errors.category.message}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="w-full  rounded-md"
                  id="description"
                  {...register('description', {
                    required: 'Please enter description',
                  })}
                />
                {errors.description && (
                  <div className="text-red-500">
                    {errors.description.message}
                  </div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  className="w-full  rounded-md"
                  id="location"
                  {...register('location', {
                    required: 'Please enter location',
                  })}
                />
                {errors.location && (
                  <div className="text-red-500">
                    {errors.location.message}
                  </div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  className="w-full  rounded-md"
                  id="phone"
                  {...register('phone', {
                    required: 'Please enter phone',
                  })}
                />
                {errors.phone && (
                  <div className="text-red-500">
                    {errors.phone.message}
                  </div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="price">Price</label>
                <input
                  type="text"
                  className="w-full  rounded-md"
                  id="price"
                  {...register('price', {
                    required: 'Please enter price',
                  })}
                />
                {errors.price && (
                  <div className="text-red-500">
                    {errors.price.message}
                  </div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="availability">Availability</label>
                <input
                  type="text"
                  className="w-full  rounded-md"
                  id="availability"
                  {...register('availability', {
                    required: 'Please enter availability',
                  })}
                />
                {errors.availability && (
                  <div className="text-red-500">
                    {errors.availability.message}
                  </div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="rating">Rating</label>
                <input
                  type="text"
                  className="w-full  rounded-md"
                  id="rating"
                  {...register('rating', {
                    required: 'Please enter rating',
                  })}
                />
                {errors.rating && (
                  <div className="text-red-500">
                    {errors.rating.message}
                  </div>
                )}
              </div>

              <div className="mb-4 flex justify-center">
                <button
                  disabled={loadingUpdate}
                  className="m-auto w-1/2 rounded-md bg-green-500 py-1.5 font-medium hover:bg-green-600"
                >
                  {loadingUpdate ? 'Loading' : 'Update'}
                </button>
              </div>
              <div className="mb-4">
                <Link href={`/admin/partners`}>Back</Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </Layout>
  );
}

AdminPartnerEditScreen.auth = { adminOnly: true };
