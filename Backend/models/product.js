const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    provider_id: { type: String, required: true },
    businessname: { type: String, required: true },
    practicename: { type: String, required: true },
    address1: { type: String },
    city: { type: String },
    state: { type: String, required: true },
    zip_code: { type: String, required: true },
    telephonenumber: { type: String, required: true },
    specialitieslist: { type: String, required: true },
    supplieslist: { type: String, required: true },
    Unit_Price: { type: String, required: true },
    Quantity: { type: String, required: true },
    days_in_store: { type: String, required: true },
    Date_Purchased: { type: String, required: true },
  },
  { timeStamp: true, unique: true }
);
const Product = mongoose.model("product", ProductSchema);
module.exports = Product;
