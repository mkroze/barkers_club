import { getSession } from 'next-auth/react';
import Partner from '../../../../models/Partners';
import db from '../../../../utils/db';

const handler = async (req, res) => {
  const session = await getSession({ req });
  if (!session || !session.user.isAdmin) {
    return res.status(401).send('admin signin required');
  }
  // const { user } = session;
  if (req.method === 'GET') {
    return getHandler(req, res);
  } else if (req.method === 'POST') {
    return postHandler(req, res);
  } else {
    return res.status(400).send({ message: 'Method not allowed' });
  }
};
const postHandler = async (req, res) => {
  await db.connect();
  if(!req){
     const newPartner = new Partner({
    
    image: '/images/shirt1.jpg',
    name: 'sample name',
    category: 'sample category',
    description: 'sample description',
    location: 'sample location',
    phone: 'sample phone',
    price: 0,
    availability: 'sample availability',
    rating: 0,
        
  });
  
  const partner = await newPartner.save();
  await db.disconnect();
  res.send({ message: 'Partner created successfully', partner });
  } 
  else{
    const newPartner = new Partner({
    
      image: req.body.image,
      name: req.body.name,
      category: req.body.category,
      description: req.body.description,
      location: req.body.location,
      phone: req.body.phone,
      price: req.body.price,
      availability: req.body.availability,
      rating: req.body.rating,
          
    });
    
  const partner = await newPartner.save();
  await db.disconnect();
  res.send({ message: 'Partner created successfully', partner });
  }

};
const getHandler = async (req, res) => {
  await db.connect();
  const partners = await Partner.find({});
  await db.disconnect();
  res.send(partners);
};
export default handler;