import mongoose from 'mongoose';

const roomModel = new mongoose.Schema({

    roomNumber: { type: Number, unique: true, required: true },
    roomType: { type: String, required: true },
    price: { type: Number, required: true },
    status: { type: String, required: true },

}, {
    timestamps: true
});

const rooms = mongoose.model("rooms", roomModel);

export default rooms;