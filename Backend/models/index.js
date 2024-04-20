const mongoose = require("mongoose");
const uri = "mongodb+srv://avulli:root@adtreact.aezppvm.mongodb.net/";



function main() {
    mongoose.connect(uri).then(() => {
        console.log("Succesfull")
    
    }).catch((err) => {
        console.log("Error: ", err)
    })
}

module.exports = { main };