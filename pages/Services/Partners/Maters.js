import Layout from '../../../components/Layout' ;
import db from '../../../utils/db';
import Partner from '../../../models/Partners';
import PartnerView from '../../../components/indexComponents/PartnerView';
const Maters = (props) => {
    return ( <Layout title="Nos eleveurs partenaires">

      {props.partners.map(trainer =>{
        return <PartnerView infos={trainer}/>
      })}
      
    
    </Layout> );
}
export async function getServerSideProps() {
    await db.connect();
    const partners = await Partner.find({category:'Eleveur de chiens'}).lean();
    console.log(partners)
    return {
      props: {
        partners: partners.map(db.convertDocToObj),
      },
    };
  }
export default Maters;