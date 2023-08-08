import mongoose from "mongoose";

mongoose.connect('mongodb+srv://antibana:057057@cluster0.riwqgzj.mongodb.net/alura-node');

let db = mongoose.connection;

export default db;