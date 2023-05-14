import { getSession } from 'next-auth/react';
import Partners from '../../../models/Partners';
import db from '../../../utils/db';

const handler = async (req, res) => {
  

 
  await db.connect();
  const newPartners = new Partners({
    ...req.body,
    
  });

  const order = await newPartners.save();
  res.status(201).send(order);
};
export default handler;