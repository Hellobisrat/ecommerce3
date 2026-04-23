import User from "../models/User.js";

export const getUsers = async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
};

export const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
};

export const makeAdmin = async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    { isAdmin: true },
    { new: true }
  );
  res.json(user);
};