import mongoose from 'mongoose';

const DogSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    breed: { type: String, required: true },
    img: { type: String, required: true },
    age: { type: Number, required: true },
    births: { type: Number, required: true },
    sex: { type: String, required: true },
  },
  { timestamps: true }
);

const Dog = mongoose.models.Dog || mongoose.model('Dog', DogSchema);
export default Dog;
