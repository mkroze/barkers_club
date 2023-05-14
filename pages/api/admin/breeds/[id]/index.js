import { getSession } from 'next-auth/react';
import Breed from '../../../../../models/Breed';
import db from '../../../../../utils/db';

const handler = async (req, res) => {
  const session = await getSession({ req });
  if (!session || (session && !session.user.isAdmin)) {
    return res.status(401).send('signin required');
  }

  const { user } = session;
  if (req.method === 'GET') {
    return getHandler(req, res, user);
  } else if (req.method === 'PUT') {
    return putHandler(req, res, user);
  } else if (req.method === 'DELETE') {
    return deleteHandler(req, res, user);
  } else {
    return res.status(400).send({ message: 'Method not allowed' });
  }
};
const getHandler = async (req, res) => {
  await db.connect();
  const breed = await Breed.findById(req.query.id);
  await db.disconnect();
  res.send(breed);
};
const putHandler = async (req, res) => {
  await db.connect();
  const breed = await Breed.findById(req.query.id);
  if (breed) {
    
    breed.title = req.body.title;
    breed.img = req.body.img;
    breed.brief = req.body.brief;
    breed.history = req.body.history;
    breed.physical = req.body.physical;
    breed.behaviour = req.body.behaviour;
    breed.education = req.body.education;
    breed.condition = req.body.condition;
    breed.health = req.body.health;
    breed.lifespan = req.body.lifespan;
    breed.hygiene = req.body.hygiene;
    breed.food = req.body.food;
    breed.activity = req.body.activity;
   
    await breed.save();
    await db.disconnect();
    res.send({ message: 'Breed updated successfully' });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'Breed not found' });
  }
};
const deleteHandler = async (req, res) => {
  await db.connect();
  const breed = await Breed.findById(req.query.id);
  if (breed) {
    await breed.remove();
    await db.disconnect();
    res.send({ message: 'Breed deleted successfully' });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'Breed not found' });
  }
};
export default handler;