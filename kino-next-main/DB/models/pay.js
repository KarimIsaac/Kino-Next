import mongoose from "mongoose";

// Check if the model already exists before defining it
const Pay = mongoose.models.Pay || mongoose.model('Pay', new mongoose.Schema({
  cardName: String,
  cardNumber: String,
  expirationDate: String,
  cvc: String,
  totalPrice: Number,
}));

export default Pay;