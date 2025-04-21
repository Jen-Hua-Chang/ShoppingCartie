import mongoose from 'mongoose';

const subscriptionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  billingCycle: {
    type: String,
    enum: ['monthly', 'yearly', 'weekly', 'daily'],
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  active: {
    type: Boolean,
    default: true
  },
}, { timestamps: true });


const Subscription = mongoose.model('Subscription', subscriptionSchema);
export default Subscription;
