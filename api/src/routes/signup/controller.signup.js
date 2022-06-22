import User from "../user/model.user";

/* register users */
export const signup = async (req, res) => {
  try {
    //check if user exists in database or not
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      res.status(409).send({ message: "Email already exists." });
    } else {
      user = new User({ ...req.body, isVerified: false });
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

