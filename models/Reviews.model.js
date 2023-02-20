const { Schema, model } = require("mongoose");

const reviewsSchema = new Schema(
  {
    content: String,
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  {
    timestamps: true,
  }
);

const Reviews = model("Reviews", reviewsSchema);

module.exports = Reviews;