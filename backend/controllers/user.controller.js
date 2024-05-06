import User from "../models/user.model.js";

export const getUserForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    //Every user in our database but not the current authenticated user and not select the password
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId } }).select("-password");

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.error("Error in getUsersForSidebar: ", error.message);
    res.stauts(500).json({ error: "Internal server error" });
  }
};
