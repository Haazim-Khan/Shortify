import mongoose from "mongoose";

const schema = new mongoose.Schema({
  longURL: {type: String, required: true},
  shortURL: {type: String, required: true},
});

export const url = mongoose.models.Shortify || mongoose.model("Shortify", schema);
