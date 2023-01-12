const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

mongoose.connect("mongodb://127.0.0.1/olympics",{
    
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connection is successful");
}).catch((err)=>{
    console.log(err)
    console.log("No connection");
});
