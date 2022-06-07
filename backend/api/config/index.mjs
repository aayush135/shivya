import mongoose from "mongoose";
import routes from "../src/routes/index.mjs";
import bodyParser from "body-parser";

export default (app) => {
  routes(app);
  app.use(bodyParser);

  mongoose.connect(
    "mongodb://mongodb:27017/MERN-APP",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        console.error("FAILED TO CONNECT MONGODB");
        console.error(err);
      } else {
        console.log("CONNECTED TO MONGODB");
      }
    }
  );
};
