/* import connectDb from "../../../DB/connectDb";
import User from "../../../DB/models/users";

// Find a user with id from /api/users/[id].
export default async function handler(req, res) {
    try {
        connectDb().then(async () => {
            const { id } = req.query;
            const user = await User.findOne({ id: id });
            if (user) {
                // What information to send back.
                const data = {
                    id: user.id,
                    name: user.name,
                    phone: user.phone,
                    email: user.email,
                }
                res.status(200).json(data);
            } else {
                // If no user with ID is found, return 404.
                res.status(404).json({ message: "No user found!" });
            }
        });
    } catch (error) {
        // If error (Database unavailable), return 500.
        res.status(500).json({ message: "Error getting users!" });
    }
} */

// THIS API ROUTE IS NOW OBSOLETE. WE CAN REMOVE THIS ROUTE IN THE FUTURE !!!!!!!!!!!!!!!!!!
