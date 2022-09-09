const mongoose = require("mongoose")

console.log("conecting to mongo");
export async function dbConnect()
{
    const DB_URI = process.env['DB_URI'];
    try {
        await mongoose.connect(DB_URI)
        console.log('MongoDB connected')
    } catch (error) {
        console.error(error)
    }
}