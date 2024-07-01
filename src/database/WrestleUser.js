import mongoose from 'mongoose';

const wrestlerUserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const WrestlerUser = mongoose.model('WrestlerUser', wrestlerUserSchema);

export default WrestlerUser;
