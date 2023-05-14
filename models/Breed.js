import mongoose from 'mongoose';

const BreedSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    img: { type: String, required: true },
    brief: { type: String, required: true },
    history: { type: String, required: true },
    physical: { type: String, required: true },
    behaviour: { type: String, required: true },
    education: { type: String, required: true },
    condition: { type: String, required: true },
    health: { type: String, required: true },
    lifespan: { type: String, required: true },
    hygiene: { type: String, required: true },
    food: { type: String, required: true },
    activity: { type: String, required: true },
  },
  { timestamps: true }
);

const Breed = mongoose.models.Breed || mongoose.model('Breed', BreedSchema);
export default Breed;
