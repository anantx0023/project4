const User = require("../models/user");

async function handleGetAllUsers(req,res) {
    const allDbUsers = await User.find({});
    return res.json(allDbUsers);
}

async function handlegetUserById(req,res) {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        return res.json(user);
}

async function handleupdateUserById(req,res) {
    await User.findByIdAndUpdate(req.params.id, { lastName: "Changed" });
    return res.json({ status:"Success" });
}

async function handledeleteUserById(req,res) {
    await User.findByIdAndDelete(req.params.id);
    return res.json({ status:"Success" });
}

async function handlecreateUserById(req,res) {
    const body = req.body;
    if(
      !body ||
      !body.first_name ||
      !body.last_name ||
      !body.email ||
      !body.gender ||
      !body.job_title
      ){
        return res.status(400).json({msg:"All fields are require...."});
      }
    
      const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title,
      })
      
      console.log("result",result);
      return res.status(201).json({ msg:"success", id: result._id });
}

module.exports = {
    handleGetAllUsers,
    handlegetUserById,
    handleupdateUserById,
    handledeleteUserById,
    handlecreateUserById
}
