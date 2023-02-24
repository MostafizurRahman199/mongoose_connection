const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

const conncetDB = async () => {


    try {

        await mongoose.connect("mongodb://127.0.0.1:27017/doctorapp", {

            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log("Connection is successful");


    } catch (error) {
        console.log(`No connection : ${error}`);
    }



}

module.exports = conncetDB;
