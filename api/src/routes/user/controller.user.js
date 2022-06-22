import User from "./model.user";

export const index = (req, res) => {
      res.send();
};

/* login users */
export const login = (req, res) => {
  try {
    res.sendStatus(200)
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send({ message: "Something went wrong. Please contact support." });
  }
};

/* register users */
export const registerUser = async (req, res) => {
  try {
    //check if user exists in database or not
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      res.status(409).send({ message: "Email already exists." });
    } else {
      user = new User({...req.body,isVerified:false});
      await user.save();
      res.status(201).send(user);
    }
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send({ message: "Something went wrong. Please contact support" });
  }
};
