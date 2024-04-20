const mongoose = require("mongoose");

const suppliesSchema = new mongoose.Schema({
  provider_id: { type: String, required: true },
    supplieslist: {
      type: String,
      required: true,
    },
    Quantity: {
      type: Number,
      required: true,
    },
    Date_Purchased: {
      type: Date,
      required: true,
    },
    // Add more fields as needed
  });
  
  // Create the model
  const Supplies = mongoose.model('Supplies', suppliesSchema);
  
  // Export the model
  module.exports = Supplies;