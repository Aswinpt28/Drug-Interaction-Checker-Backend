const jwt = require("jsonwebtoken");
const { userSecretKey } = require("../config");

exports.authenticateUser = (req, res, next) => {
  // Retrieve the token from cookies
  const token = req.cookies.authToken;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decodedToken = jwt.verify(token, userSecretKey);

    req.user = decodedToken;

    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Invalid token" });
  }
};
