const { Schema, model } = require("mongoose");

const reviewSchema = new Schema(
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
