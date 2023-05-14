import Layout from '../../../components/Layout';
import PartnerView from '../../../components/indexComponents/PartnerView';
import Partner from '../../../models/Partners';
import db from '../../../utils/db';
import { useRouter } from 'next/router';
const Partners = (props) => {
  
  return (
    <Layout title="Nos promeneurs partenaires">
      {props.partners.map((trainer) => {
        return <PartnerView infos={trainer} />;
      })}
    </Layout>
  );
};
export async function getServerSideProps(context) {
  const { query } = context;
  const { category, city } = query;

  await db.connect();

  const partners = await Partner.find({
    category: { $regex: new RegExp(category, 'i') },
    location: { $regex: new RegExp(city, 'i') },
  }).lean();

  return {
    props: {
      partners: partners.map(db.convertDocToObj),
    },
  };
}
export default Partners;
