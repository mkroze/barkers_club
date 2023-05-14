import axios from 'axios';
import Link from 'next/link';
import { Bar } from 'react-chartjs-2';
import SideMenu from '../../components/adminComponent/SideMenu'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import React, { useEffect, useReducer } from 'react';
import Layout from '../../components/Layout';
import { getError } from '../../utils/error';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
};

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, summary: action.payload, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      state;
  }
}
function AdminDashboardScreen() {
  const [{ loading, error, summary }, dispatch] = useReducer(reducer, {
    loading: true,
    summary: { salesData: [] },
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/admin/summary`);
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };

    fetchData();
  }, []);

  const data = {
    labels: summary.salesData.map((x) => x._id), // 2022/01 2022/03
    datasets: [
      {
        label: 'Sales',
        backgroundColor: 'rgba(5, 150, 105, 1)',
        data: summary.salesData.map((x) => x.totalSales),
      },
    ],
  };
  return (
    <Layout title="Admin Dashboard">
      <div className="grid  md:grid-cols-4 md:gap-5">
        
         <SideMenu step={0} />
        <div className="md:col-span-3">
          <h1 className="mb-4 text-xl">Admin Dashboard</h1>
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div className="alert-error">{error}</div>
          ) : (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="mb-5  block   rounded-lg border border-gray-200  shadow-md m-5 p-5">
                  <p className="text-3xl">{summary.ordersPrice} MAD</p>
                  <p>Ventes</p>
                  <Link href="/admin/orders">Visualiser ventes</Link>
                </div>
                <div className="mb-5  block   rounded-lg border border-gray-200  shadow-md m-5 p-5">
                  <p className="text-3xl">{summary.ordersCount} </p>
                  <p>Commandes</p>
                  <Link href="/admin/orders">Visualiser commandes</Link>
                </div>
                <div className="mb-5  block   rounded-lg border border-gray-200  shadow-md m-5 p-5">
                  <p className="text-3xl">{summary.productsCount} </p>
                  <p>Articles</p>
                  <Link href="/admin/items">Visualiser articles</Link>
                </div>
                <div className="mb-5  block   rounded-lg border border-gray-200  shadow-md m-5 p-5">
                  <p className="text-3xl">{summary.usersCount} </p>
                  <p>Membres</p>
                  <Link href="/admin/users"> Visualiser membres </Link>
                </div>
              </div>
              <h2 className="text-xl font-bold text-green-600">Rapport des ventes</h2>
              <Bar
                options={{
                  legend: { display: true, position: 'right' },
                }}
                data={data}
              />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

AdminDashboardScreen.auth = { adminOnly: true };
export default AdminDashboardScreen;
