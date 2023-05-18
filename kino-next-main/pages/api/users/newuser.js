import connectDb from "../../../DB/connectDb";
import User from "../../../DB/models/users";
import bcrypt from "bcryptjs";

// Route for creating a new user /api/users/newuser.
export default function userHandler(req, res) {
  if (req.method === "POST") {
    if (
      req.body != null &&
      Object.keys(req.body.name).length >= 3 &&
      Object.keys(req.body.phone).length >= 10 &&
      Object.keys(req.body.email).length >= 6 &&
      Object.keys(req.body.password).length >= 4
    ) {
      // Look in the database if email is already in use.
      connectDb().then(async () => {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
          res
            .status(400)
            .json({ message: "An account with that email is already in use!" });
        } else {
          // If email is not in use, create a new user.
          const newUser = new User({
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8),
            token: "",
            isAdmin: false,
            registered: new Date(),
          });
          await newUser.save();
          res.status(200).json({ message: "User created!" });
        }
      });
    } else {
      res.status(400).json({ message: "Please fill in all fields correctly!" });
    }
  } else {
    res.status(400).json({ message: "Method not allowed!" });
  }
}
