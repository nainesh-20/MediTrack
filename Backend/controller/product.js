const Product = require("../models/Product");



// Add Post
const addProduct = (req, res) => {
  const newProduct = new Product({
    provider_id: req.body.provider_id,
    businessname: req.body.businessname,
    practicename: req.body.practicename,
    address1: req.body.address1,
    city: req.body.city,
    state: req.body.state,
    zip_code: req.body.zip_code,
    telephonenumber: req.body.telephonenumber,
    specialitieslist: req.body.specialitieslist,
    supplieslist: req.body.supplieslist,
    Unit_Price: req.body.Unit_Price,
    Quantity: req.body.Quantity,
    days_in_store: req.body.days_in_store,
    Date_Purchased: req.body.Date_Purchased,
  });
  newProduct
    .save()
    .then((product) => {
      res.json(product);
    })
    .catch((err) => {
      res.json(err);
    });
};


// Get All Products
const getAllProducts = async (req, res) => {
  try {
    const findAllProducts = await Product.find({}).sort({ _id: -1 }); // -1 for descending;
    res.json(findAllProducts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete Selected Product
const deleteSelectedProduct = async (req, res) => {
  try {
    console.log(req.params.id);
    const deleteProduct = await Product.deleteOne({ _id: req.params.id });
    res.json(deleteProduct);
  }
  catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
  
  

};

// Update Selected Product
const updateSelectedProduct = async (req, res) => {
  try {
    console.log(req.body);
    const updatedResult = await Product.findByIdAndUpdate(
      { _id: req.body.productId},
      {
        provider_id: req.body.provider_id,
        businessname: req.body.businessname,
        practicename: req.body.practicename,
        address1: req.body.address1,
        city: req.body.city,
        state: req.body.state,
        zip_code: req.body.zip_code,
        telephonenumber: req.body.telephonenumber,
        specialitieslist: req.body.specialitieslist,
        supplieslist: req.body.supplieslist,
        Unit_Price: req.body.Unit_Price,
        Quantity: req.body.Quantity,
        days_in_store: req.body.days_in_store,
        Date_Purchased: req.body.Date_Purchased
      },
      
    );
    console.log(updatedResult);
    res.json(updatedResult);
  } catch (error) {
    console.log(error);
    res.status(402).send("something went wrong!");
  }
};


// Search Products
const searchProduct = async (req, res) => {
  try {
    const searchTerm = req.query.find;
    const products = await Product.find({
      businessname: { $regex: searchTerm, $options: "i" },
    });
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  addProduct,
  getAllProducts,
  deleteSelectedProduct,
  updateSelectedProduct,
  searchProduct,
};
