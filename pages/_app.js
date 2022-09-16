import '../styles/globals.css'
import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return <Layout>
      <Component props={pageProps}/>
    </Layout>
}

export default MyApp
