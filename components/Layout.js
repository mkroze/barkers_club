import Footer from './Footer';
import Navbar from './navbar';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? title + ' - Barkers Club' : 'Barkers Club'}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer position="bottom-center" limit={1} />
      <div>
        <Navbar />
        {children}

        <Footer />
      </div>
    </>
  );
};

export default Layout;
