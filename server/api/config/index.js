const { Console } = require("console");
const mongoose = require("mongoose");

module.exports = async (app) => {
  require("../src/routes")(app);

  mongoose.connect(
      'mongodb://mongodb:27017/MERN-APP',
      {
          useNewUrlParser:true,
          useUnifiedTopology:true,
      },
      (err)=>{
          if(err){
              console.error('FAILED TO CONNECT MONGODB')
              console.error(err)
          }else{
              console.log('CONNECTED TO MONGODB')
              app.listen(8080,()=>{console.log("server is running on port 8080")})
          }
      }
  );
};
