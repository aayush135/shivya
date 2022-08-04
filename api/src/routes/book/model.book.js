import mongoose from "mongoose";

const { Schema } = mongoose;

const bookSchema = new Schema({

  title: {type:String},
  rating: {type:Number},
  price: {type:Number},
  author:{type:String},
  language:{type:String},
  publisher: {type:String},
  genre:{type:String},
  edition: {type:String},
  pages: {type:Number},
  seller:{type:String},
  description: {type:String},
  imageURL: {type:String}
});

export default mongoose.model("Book", bookSchema);
