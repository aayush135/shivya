import jwt from "jsonwebtoken";
import User from "../routes/user/model.user";

/* crete token */
export const createToken = async (req, res, next) => {
  try {
    let user = await User.findOne(req.body, { password: 0 });
    if (user) {
      const token = jwt.sign(
        { email: user.email, userId: user._id.toString() },
        "secret",
        { expiresIn: "1h" }
      );

      res.cookie("token", token, { maxAge: 900000, httpOnly: true });

      res.json(user);

      next();
    } else {
      res.status(404).send({ message: "User dose not exists." });
    }
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send({ message: "Something went wrong. Please contact support." });
  }
};

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (token) {
      const decodedToken = jwt.verify(token, "secret");

      if (decodedToken) {
        const user = await User.findOne(
          { _id: decodedToken.userId },
          { password: 0 }
        );
        if (user) {
          res.status(200).json(user);
          next();
        } else {
          res.sendStatus(403);
        }
      } else {
        res.sendStatus(403);
      }
    } else {
      res.sendStatus(403);
    }
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send({ message: "Something went wrong. Please contact support." });
  }
};

export const expireToken = async (req, res, next) => {};
