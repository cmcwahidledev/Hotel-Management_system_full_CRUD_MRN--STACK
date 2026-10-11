import mongoose from 'mongoose'

const reservationModel = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "customers", required: true, unique: true
    },
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "rooms", required: true, unique: true
    },
    date: {
        type: Date, required: true,
    },
}, {
    timestamps: true
});

const reservation = mongoose.model("reservations", reservationModel);

export default reservation;