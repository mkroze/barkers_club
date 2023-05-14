import { getSession } from 'next-auth/react';
import Partner from '../../../../../models/Partners';
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
  const partner = await Partner.findById(req.query.id);
  await db.disconnect();
  res.send(partner);
};
const putHandler = async (req, res) => {
  await db.connect();
  const partner = await Partner.findById(req.query.id);
  if (partner) {
    partner.image = req.body.image;
    partner.name = req.body.name;
    partner.category = req.body.category;
    partner.description = req.body.description;
    partner.location = req.body.location;
    partner.price = req.body.price;
    
    partner.phone = req.body.phone;
    partner.availability = req.body.availability;
    partner.rating = req.body.rating;
    await partner.save();
    await db.disconnect();
    res.send({ message: 'Partner updated successfully' });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'Partner not found' });
  }
};
const deleteHandler = async (req, res) => {
  await db.connect();
  const partner = await Partner.findById(req.query.id);
  if (partner) {
    await partner.remove();
    await db.disconnect();
    res.send({ message: 'Partner deleted successfully' });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'Partner not found' });
  }
};
export default handler;