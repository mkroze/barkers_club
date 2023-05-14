import { getSession } from 'next-auth/react';
import Article from '../../../../../models/Article';
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
  const article = await Article.findById(req.query.id);
  await db.disconnect();
  res.send(article);
};
const putHandler = async (req, res) => {
  await db.connect();
  const article = await Article.findById(req.query.id);
  if (article) {
    article.title = req.body.title;
    article.image = req.body.image;
    article.summary = req.body.summary;
    article.description = req.body.description;
    
    await article.save();
    await db.disconnect();
    res.send({ message: 'Article updated successfully' });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'Article not found' });
  }
};
const deleteHandler = async (req, res) => {
  await db.connect();
  const article = await Article.findById(req.query.id);
  if (article) {
    await article.remove();
    await db.disconnect();
    res.send({ message: 'Article deleted successfully' });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'Article not found' });
  }
};
export default handler;