// import User from "../schema/userSchema";
import User from "../schema/userSchema.js";
export const addUser = async (req, res) => {
  // console.log("valid call from signup");

  const user = req.body;

  // get user
  const addUser = new User(user);
  // console.log(user);

  try {
    await addUser.save();
    res.status(201).json(addUser);
    console.log(addUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
    console.log("Error to parser the user", error);
  }
};

// user data in Database
export const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// get user id to edit
export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    console.log(user);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const editUser = async (req, res) => {
  let user = req.body;
  const editUser = new User(user);
  try {
    await User.updateOne({ _id: req.params.id }, editUser);
    res.status(201).json(editUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// export const deleteUser = async (req, res) => {
//   try {
//     await User.deleteOne({ _id: req.params.id });
//     res.status(201).json("user deleted successfully ");
//   } catch (error) {
//     res.status(409).json({ message: error.message });
//   }
// };
export const deleteUser = async (request, response) => {
  try {
    await User.deleteOne({ _id: request.params.id });

    response.status(201).json("User deleted Successfully");
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

// deleteUser()
