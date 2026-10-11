import customerModel from "../models/customerModel.js";


export const customerAdd = async (req, res) => {
    const { name, phone, email, address } = req.body;

    try {
        const boooking = await customerModel.findOne({ name, phone, email });
        if (boooking) {
            return res.status(400).json({ message: "booking is alreday exit" });
        }

        await customerModel.create({ name, phone, email, address });
        res.status(200).json({ message: "customer successfully" });

    } catch (err) {
        res.status(400).json({ message: "not found" });
    }
};

export const customerGet = async (req, res) => {
    const cust = await customerModel.find();

    res.json(cust);
}