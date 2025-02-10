import mongoose from 'mongoose'
const Schema = mongoose.Schema
const formInfo = new Schema({
  name: String,
  email: String,
  message: String
})

const FormInfo =mongoose.model('FormInfo',formInfo)
export default FormInfo