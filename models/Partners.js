const mongoose = require('mongoose');
const PartnerSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  availability: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    default: 0
  },
},
{ timestamps: true }
);
const Partner =
  mongoose.models.Partner || mongoose.model('Partner', PartnerSchema);
export default Partner;