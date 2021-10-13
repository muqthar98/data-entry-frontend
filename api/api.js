import axios from "axios";

export const addUser = async () => {
  await axios.post("http://localhost:5000/user/");
};

export const getUserDetails = async (req, res) => {
  const user = await axios.get("http://localhost:5000/user/get");
  res.status(200).json(user);
};
