import roomModel from '../models/roomModel.js';

export const roomAdd = async (req, res) => {
    const { roomNumber, roomType, price, status } = req.body;

    try {
        const roomExit = await roomModel.findOne({ roomNumber, roomType, price, status });

        if (roomExit) {
            return res.status(404).json({ message: "room is already exit" });
        };

        await roomModel.create({
            roomNumber, roomType, price, status
        });

        res.status(200).json({ message: "room successfully" });

    } catch (err) {
        res.status(404).json({ message: "not found" });
    }
}; 

export const roomGet = async (req,res)=>{
    const get = await roomModel.find();
    res.json(get)
}; 