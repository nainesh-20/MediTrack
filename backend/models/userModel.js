const mongoose= require('mongoose');

const userSchema =  mongoose.Schema({
  firstname: {type:String ,required: true,unique:true},
  lastname: {type:String ,required: true,unique:true},
  hospitalname: {type:String ,required: true,unique:true},
  addressone: {type:String ,unique:true},
  addresstwo: {type:String ,unique:true},
  city: {type:String ,required: true,unique:true},
  country: {type:String ,required: true,unique:true},
  pincode: {type:String ,required: true,unique:true},
  email: {type:String ,required: true,unique:true},
  phonenumber: {type:String ,required: true,unique:true},
  password: {type:String ,required: true,unique:true,},

},{timeStamp : true,unique:true});

module.exports= mongoose.model('User', userSchema);