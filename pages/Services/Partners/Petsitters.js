import Layout from '../../../components/Layout';
import PartnerView from '../../../components/indexComponents/PartnerView';
import Partner from '../../../models/Partners';
import db from '../../../utils/db';
const Petsitters = (props) => {
    return ( <Layout title="Nos garderies partenaires">
    {props.partners.map(trainer =>{
      return <PartnerView infos={trainer}/>
    })}
    
  </Layout> );
}
 
export async function getServerSideProps() {
    await db.connect();
    const partners = await Partner.find({category:'Petsitter'}).lean();
    console.log(partners)
    return {
      props: {
        partners: partners.map(db.convertDocToObj),
      },
    };
  }
  export default Petsitters;