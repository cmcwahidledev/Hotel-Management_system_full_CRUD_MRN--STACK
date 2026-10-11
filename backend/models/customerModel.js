import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
    name: { type: String, unique: true, required: true },
    phone: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    address: { type: String, required: true },
}, {
    timestamps: true
});

const customer = mongoose.model("customers", customerSchema);

export default customer;