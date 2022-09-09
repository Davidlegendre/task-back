const { Schema, model } = require("mongoose")

const TaskSchema = new Schema({
    numero: Number,
    titulo: String,
    contenido: String,
    secuencia:Array,
    img:Array,
    music:Object
})
module.exports = model('task', TaskSchema)