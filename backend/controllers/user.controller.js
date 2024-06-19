const handleUserController = (req, res, next) => {
  const { name, email, password } = req.body;
  console.log("UserController", name, email, password);
  res.json({
    message: "Hello Worldsss",
  });
};

module.exports = { handleUserController };
