const mongoose = require("mongoose");

mongoose.set('strictQuery', false);


mongoose.connect("mongodb+srv://mansvisahu2003:<password>@cluster0.wqqhcgb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("connected!");
}).catch((err)=>{
    console.log(err);
})