const User = require("../model/user.model");

const register = async (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const role = req.body.role;
  const password = req.body.password;

  const newUser = new User({
    firstName,
    lastName,
    email,
    role,
    password,
  });

  newUser
    .save()
    .then(() => {
      res.json("user Added");
    })
    .catch((err) => {
      console.log(err);
    });
};

// const re = async (ctx) => {
//   try {
//     const { firstName, lastName, email, role, password } = ctx.request.body;

//     const user = await User.create({
//       firstName: firstName,
//       lastName: lastName,
//       email: email,
//       role: role,
//       password: password,
//     });

//     ctx.body = "user added";
//   } catch (error) {
//     ctx.body = error;
//   }
// };

const log = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const user = await User.find(email);

    if (!user) {
      res.send({ status: "user not found" });
    } else if (password != user.password) {
      res.send({ status: "incorrect password" });
    } else {
      res.send({ status: "loging successfully" });
    }
  } catch (error) {}
};

const login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.find(email)
    .then((addclass) => res.send(addclass))

    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  register,
  login,
};
