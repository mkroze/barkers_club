// import Product from '../../models/Product';
// import User from '../../models/User';
import Breed from '../../models/Breed';
import Dog from '../../models/Dog';
import Item from '../../models/Item';
import User from '../../models/User';
import Article from '../../models/Article';
import Partners from '../../models/Partners';
import data from '../../utils/data';
import db from '../../utils/db';

const handler = async (req, res) => {
  await db.connect();

  await Breed.deleteMany();
  await Breed.insertMany(data.breeds);

  await Dog.deleteMany();
  await Dog.insertMany(data.dogs);

  await Item.deleteMany();
  await Item.insertMany(data.items);

  await User.deleteMany();
  await User.insertMany(data.users);

  await Article.deleteMany();
  await Article.insertMany(data.articles);

  await Partners.deleteMany();
  await Partners.insertMany(data.partners);

  await db.disconnect();
  res.send({ message: 'seeded successfully' });
};
export default handler;
