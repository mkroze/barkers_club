import { getSession } from 'next-auth/react';
import Breed from '../../../../models/Breed';
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
  const newBreed = new Breed({
    title: 'sample title',
    img: 'sample img',
    brief: 'sample brief',
    history: 'sample history',
    physical: 'sample physical',
    behaviour: 'sample behaviour',
    education: 'sample education',
    condition: 'sample condition',
    health: 'sample health',
    lifespan: 'sample lifespan',
    hygiene: 'sample hygiene',
    food: 'sample food',
    activity: 'sample activity',
    
    
  });

  const breed = await newBreed.save();
  await db.disconnect();
  res.send({ message: 'Breed created successfully', breed });
};
const getHandler = async (req, res) => {
  await db.connect();
  const breeds = await Breed.find({});
  
  await db.disconnect();
  res.send(breeds);
};
export default handler;