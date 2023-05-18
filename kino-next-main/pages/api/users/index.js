//TODO: remove this api an connect to the MongoDB database at Login with ServerSideProps();
import Cookies from "cookies";
import { v4 as uuid_V4 } from "uuid";
import connectDb from "../../../DB/connectDb";
import User from "../../../DB/models/users";
import bcrypt from "bcryptjs";

export default function loginChecker(req, res) {
  const cookie = new Cookies(req, res);
  const { userEmail, password } = req.body;

  return connectDb().then(async () => {
    let infromation;
    const sessionValue = uuid_V4();
    const user = await User.find();
    user.forEach((account) => {
      if (
        account.email === userEmail &&
        !!bcrypt.compareSync(password, account.password)
      ) {
        infromation = {
          user: account.name,
          email: account.email,
          id: account.id,
          key: sessionValue,
          login: true,
        };
      }
    });

    if (infromation !== undefined) {
      cookie.set("_session", sessionValue);
      res.status(200).json(infromation);
    } else {
      res.status(401).send({
        err: true,
        message: "401: account do not exist!",
      });
    }
  });
}
