import reservationModel from "../models/reservationModel.js";

export const reservationAdd = async (req, res) => {

    try {
        const { customer, room, date } = req.body;

        const reservationExit = await reservationModel.findOne({ customer, room });

        if (reservationExit) return res.status(400).json({ message: "reservation already exit" });

        await reservationModel.create({ customer, room, date });
        res.status(200).json({ message: "reservation successfully" });

    } catch (error) {
        res.status(400).json({ message: "not found" });
    }
};

export const reservationGet = async (req, res) => {

    try {
        const reservation = await reservationModel.find()
            .populate("customer").populate("room");
        res.json(reservation);
    } catch (error) {
        res.json({ message: error.message })
    }
};