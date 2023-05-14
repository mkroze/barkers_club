import { getSession } from 'next-auth/react';
import Item from '../../../../../models/Item';
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
  const item = await Item.findById(req.query.id);
  await db.disconnect();
  res.send(item);
};
const putHandler = async (req, res) => {
  await db.connect();
  const item = await Item.findById(req.query.id);
  if (item) {
    item.name = req.body.name;
    item.slug = req.body.slug;
    item.price = req.body.price;
    item.category = req.body.category;
    item.image = req.body.image;
    item.brand = req.body.brand;
    item.countInStock = req.body.countInStock;
    item.description = req.body.description;
    await item.save();
    await db.disconnect();
    res.send({ message: 'Item updated successfully' });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'Item not found' });
  }
};
const deleteHandler = async (req, res) => {
  await db.connect();
  const item = await Item.findById(req.query.id);
  if (item) {
    await item.remove();
    await db.disconnect();
    res.send({ message: 'Item deleted successfully' });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'Item not found' });
  }
};
export default handler;