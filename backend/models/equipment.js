const mongoose= require('mongoose');

const equiSchema =  mongoose.Schema({
    provider_id: {type:String ,required: true,unique:true},
    businessname: {type:String ,required: true,unique:true},
    practicename: {type:String ,required: true,unique:true},
    address1: {type:String ,unique:true},
    city: {type:String ,unique:true},
    state: {type:String ,required: true,unique:true},
    zip_code: {type:String ,required: true,unique:true},
    telephonenumber: {type:Number ,required: true,unique:true},
    specialitieslist: {type:String ,required: true,unique:true},
    supplieslist: {type:String ,required: true,unique:true},
    Unit_Price: {type:Number ,required: true,unique:true},
    Quantity: {type:Number ,required: true,unique:true},
    days_in_store: {type:Number ,required: true,unique:true},
    Date_Purchased: {type:Date ,required: true,unique:true},


},{timeStamp : true,unique:true});

module.exports= mongoose.model('equip', equiSchema);
