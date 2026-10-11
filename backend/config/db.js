import chalk from "chalk";
import mongoose from "mongoose";

const connectDB = () => {
    mongoose.connect("mongodb://localhost:27017/serene_DB")
        .then(console.log(chalk.green.bold("database connect")))
}

export default connectDB;