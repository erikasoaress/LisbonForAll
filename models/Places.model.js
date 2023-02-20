const { Schema, model } = require("mongoose");



const placesSchema = new Schema({
  name: String,
  image: String,
  location: String,
  accessibility: String,
  review: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

const Places = model("Places", placesSchema);

module.exports = Places;
