const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const salesBannerSchema = new Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
    auto: true,
  },
  name: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    required: true,
  },
  // Can have multiple fields like timestamp, expires_at, etc...
  // Keeping it simple for assestment purposes
});

const SalesBanner = mongoose.model("SalesBanner", salesBannerSchema);

module.exports = SalesBanner;
