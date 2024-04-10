const express = require('express');
const equipModel = require('../models/equipment.js');
const { default: mongoose } = require('mongoose');
const expressAsyncHandler =require('express-async-handler');
// const jwt = require('jsonwebtoken');
// const bcrypt= require('bcryptjs');
require('dotenv').config();

const equicontroller = expressAsyncHandler(async(req,res) => {

    const{provider_id,businessname,practicename,address1,city,state,zip_code,telephonenumber,specialitieslist,supplieslist,Unit_Price,Quantity,days_in_store,Date_Purchased}= req.body;
    const equip= await equipModel.create({provider_id,businessname,practicename,address1,city,state,zip_code,telephonenumber,specialitieslist,supplieslist,Unit_Price,Quantity,days_in_store,Date_Purchased});
    // const match = await bcrypt.compare(password,equip.password);
    // console.log(match);
    // if(match){
        console.log("logged in")
        res.json({
            provider_id:equip.provider_id,
            businessname:equip.businessname,
            practicename:equip.practicename,
            address1:equip.address1,
            city:equip.city,
            state:equip.state,
            zip_code:equip.zip_code,
            telephonenumber:equip.telephonenumber,
            specialitieslist:equip.specialitieslist,
            supplieslist:equip.supplieslist,
            Unit_Price:equip.Unit_Price,
            Quantity:equip.Quantity,
            days_in_store:equip.days_in_store,
            Date_Purchased:equip.Date_Purchased
            // isAdmin:equip.isAdmin,
            // token:generateToken(equip._id)
        })
    // }else{
    //     res.sendStatus(400);
    //     throw new Error("unauthorized");
});

const getAllEquips = expressAsyncHandler(async(req, res) => {
    try {
        const equips = await equipModel.find({});
        res.json(equips);
    } catch (error) {
        res.status(500).send(error);
    }
});


// const deleteEquip = expressAsyncHandler(async (req, res) => {
//     const { provider_id } = req.params;

//     try {
//         const equip = await equipModel.findOneAndDelete({ provider_id });

//         if (!equip) {
//             res.status(404).send('Equipment not found');
//         } else {
//             res.status(200).send('Equipment deleted successfully');
//         }
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });


// const updateEquip = expressAsyncHandler(async (req, res) => {
//     const { provider_id } = req.params;
//     const updateData = req.body;

//     try {
//         const equip = await equipModel.findOneAndUpdate(
//             { provider_id },
//             updateData,
//             { new: true }
//         );

//         if (!equip) {
//             res.status(404).send('Equipment not found');
//         } else {
//             res.json(equip);
//         }
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });

// module.exports = {equicontroller,getAllEquips,updateEquip,deleteEquip};
module.exports = {equicontroller,getAllEquips};