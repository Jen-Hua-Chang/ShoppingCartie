import mongoose from "mongoose";
import Subscription from '../models/subscription.model.js';

// Create a new subscription
export const createSubscription = async (req, res) => {
    const subscription = req.body; // user will send this data

    if (!subscription.name || !subscription.price || !subscription.billingCycle || !subscription.startDate) {
        return res.status(400).json({ message: "Please provide all fields" });
    }

    try {
        const newSubscription = await Subscription.create(subscription);
        res.status(201).json({ success: true, data: newSubscription });
    } catch (err) {
        console.log("Error in Create subscription:", err.message);
        res.status(500).json({ success: false, message: err.message });
    }
};

// Get all subscriptions
export const getSubscriptions = async (_, res) => {
    try {
        const subscriptions = await Subscription.find();
        res.status(200).json({ success: true, data: subscriptions });
    } catch (err) {
        console.log("Error in fetching subscriptions:", err.message);
        res.status(500).json({ success: false, message: err.message });
    }
};

// Update an existing subscription by ID
export const updateSubscription = async (req, res) => {
    const { id } = req.params;
    const subscription = req.body;

    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //     return res.status(404).json({ success: false, message: "Invalid Product Id" });
    // }

    try {
        const updatedSubscription = await Subscription.findByIdAndUpdate(
            id,
            subscription,
            { new: true }
        );
        if (!updatedSubscription) {
            return res.status(404).json({ message: 'Subscription not found' });
        }
        res.status(200).json({ success: true, data: updatedSubscription });
    } catch (err) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// Delete a subscription by ID
export const deleteSubscription = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid Product Id" });
    }

    try {
        const deletedSubscription = await Subscription.findByIdAndDelete(id);
        // if (!deletedSubscription) {
        //     return res.status(404).json({ success: false, message: 'Invalid Subscription Id' });
        // }
        res.status(200).json({ success: true, message: 'Subscription deleted!' });
    } catch (err) {
        console.log("error in deleting subscription:", err.message);
        res.status(500).json({ message: err.message });
    }
};


