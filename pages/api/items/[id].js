import Item from '../../../models/Item';
import db from '../../../utils/db';

const handler = async (req, res) => {
  await db.connect();
  const item = await Item.findById(req.query.id);
  await db.disconnect();
  res.send(item);
};

export default handler;
