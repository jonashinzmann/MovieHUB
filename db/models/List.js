import mongoose from "mongoose";

const { Schema } = mongoose;

const listSchema = new Schema({
  name: { type: String, required: true },
});

const List =
  mongoose.models.Product || mongoose.model("List", listSchema);

export default List;
