const mongoose = require('mongoose');


const connectstring = 

module.exports.connectMongoDB= function(){
    mongoose.connect(connectstring,{})
    .then(()=>{
        console.log("MongoDB connected");
    }
    )
    .catch((err)=>{
        console.log(err);
    })

}
