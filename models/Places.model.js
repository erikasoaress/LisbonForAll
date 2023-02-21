const { Schema, model } = require("mongoose");



const placesSchema = new Schema({

  name:{
    type: String,
    required: true,
  },
  image: {
    type: String
  },
  location:{
    type: String,
    required: true,
  },
  website: {
    type: String,
  } ,
  accessibility: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },
  review: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

const Places = model("Places", placesSchema);

module.exports = Places;
