import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useReducer } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Layout from '../../../components/Layout';
import { getError } from '../../../utils/error';
import SideMenu from '../../../components/adminComponent/SideMenu'
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
export default function AdminItemEditScreen() {
  const { query } = useRouter();
  const breedId = query.id;
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
        const { data } = await axios.get(`/api/admin/breeds/${breedId}`);
        dispatch({ type: 'FETCH_SUCCESS' });
        setValue('title', data.title);
        setValue('img', data.img);
        setValue('brief', data.brief);
        setValue('history', data.history);
        setValue('physical', data.physical);
        setValue('behaviour', data.behaviour);
        setValue('education', data.education);
        setValue('condition', data.condition);
        setValue('health', data.health);
        setValue('lifespan', data.lifespan);
        setValue('hygiene', data.hygiene);
        setValue('food', data.food);
        setValue('activity', data.activity);
        
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };

    fetchData();
  }, [breedId, setValue]);

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
    title,
    img,
    brief,
    history,
    physical,
    behaviour,
    education,
    condition,
    health,
    lifespan,
    hygiene,
    food,
    activity,
  }) => {
    try {
      dispatch({ type: 'UPDATE_REQUEST' });
      await axios.put(`/api/admin/breeds/${breedId}`, {
        title,
        img,
        brief,
        history,
        physical,
        behaviour,
        education,
        condition,
        health,
        lifespan,
        hygiene,
        food,
        activity,
      });
      dispatch({ type: 'UPDATE_SUCCESS' });
      toast.success('Item updated successfully');
      router.push('/admin/dogs');
    } catch (err) {
      dispatch({ type: 'UPDATE_FAIL', payload: getError(err) });
      toast.error(getError(err));
    }
  };

  return (
    <Layout title={`Edit Item ${breedId}`}>
      <div className="grid md:grid-cols-4 md:gap-5">
        <SideMenu step={6}/>
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
              <h1 className="mb-4 text-xl">{`Edit Item ${breedId}`}</h1>
              <div className="mb-4">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="w-full rounded-md"
                  id="title"
                  autoFocus
                  {...register('title', {
                    required: 'Please enter title',
                  })}
                />
                {errors.title && (
                  <div className="text-red-500">{errors.title.message}</div>
                )}
              </div>
              
              <div className="mb-4">
                <label htmlFor="img">image</label>
                <input
                  type="text"
                  className="w-full rounded-md"
                  id="img"
                  {...register('img', {
                    required: 'Please enter img',
                  })}
                />
                {errors.img && (
                  <div className="text-red-500">{errors.img.message}</div>
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
                <label htmlFor="brief">Brief</label>
                <input
                  type="text"
                  className="w-full rounded-md"
                  id="brief"
                  autoFocus
                  {...register('brief', {
                    required: 'Please enter brief',
                  })}
                />
                {errors.brief && (
                  <div className="text-red-500">{errors.brief.message}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="history">history</label>
                <input
                  type="text"
                  className="w-full rounded-md"
                  id="history"
                  autoFocus
                  {...register('history', {
                    required: 'Please enter history',
                  })}
                />
                {errors.history && (
                  <div className="text-red-500">{errors.history.message}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="physical">Physical</label>
                <input
                  type="text"
                  className="w-full rounded-md"
                  id="physical"
                  autoFocus
                  {...register('physical', {
                    required: 'Please enter physical',
                  })}
                />
                {errors.physical && (
                  <div className="text-red-500">{errors.physical.message}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="behaviour">behaviour</label>
                <input
                  type="text"
                  className="w-full rounded-md"
                  id="behaviour"
                  autoFocus
                  {...register('behaviour', {
                    required: 'Please enter behaviour',
                  })}
                />
                {errors.behaviour && (
                  <div className="text-red-500">{errors.behaviour.message}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="education">education</label>
                <input
                  type="text"
                  className="w-full rounded-md"
                  id="education"
                  autoFocus
                  {...register('education', {
                    required: 'Please enter education',
                  })}
                />
                {errors.education && (
                  <div className="text-red-500">{errors.education.message}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="condition">condition</label>
                <input
                  type="text"
                  className="w-full rounded-md"
                  id="condition"
                  autoFocus
                  {...register('condition', {
                    required: 'Please enter condition',
                  })}
                />
                {errors.condition && (
                  <div className="text-red-500">{errors.condition.message}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="health">health</label>
                <input
                  type="text"
                  className="w-full rounded-md"
                  id="health"
                  autoFocus
                  {...register('health', {
                    required: 'Please enter health',
                  })}
                />
                {errors.health && (
                  <div className="text-red-500">{errors.health.message}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="lifespan">lifespan</label>
                <input
                  type="text"
                  className="w-full rounded-md"
                  id="lifespan"
                  autoFocus
                  {...register('lifespan', {
                    required: 'Please enter lifespan',
                  })}
                />
                {errors.lifespan && (
                  <div className="text-red-500">{errors.lifespan.message}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="hygiene">hygiene</label>
                <input
                  type="text"
                  className="w-full rounded-md"
                  id="hygiene"
                  autoFocus
                  {...register('hygiene', {
                    required: 'Please enter hygiene',
                  })}
                />
                {errors.hygiene && (
                  <div className="text-red-500">{errors.hygiene.message}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="food">food</label>
                <input
                  type="text"
                  className="w-full rounded-md"
                  id="food"
                  autoFocus
                  {...register('food', {
                    required: 'Please enter food',
                  })}
                />
                {errors.food && (
                  <div className="text-red-500">{errors.food.message}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="activity">activity</label>
                <input
                  type="text"
                  className="w-full rounded-md"
                  id="activity"
                  autoFocus
                  {...register('activity', {
                    required: 'Please enter activity',
                  })}
                />
                {errors.activity && (
                  <div className="text-red-500">{errors.activity.message}</div>
                )}
              </div>
              <div className="mb-4 flex justify-center">
                <button disabled={loadingUpdate} className="m-auto w-1/2 rounded-md bg-green-500 py-1.5 font-medium hover:bg-green-600">
                  {loadingUpdate ? 'Loading' : 'Update'}
                </button>
              </div>
              <div className="mb-4">
                <Link href={`/admin/dogs`}>Back</Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </Layout>
  );
}

AdminItemEditScreen.auth = { adminOnly: true };