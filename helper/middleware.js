const jwt = require("jsonwebtoken");

module.exports = {
  autentication: (req, res, next) => {
    const token = req.headers.authorization;
    const user = jwt.decode(token, process.env.TOKEN);

    if (!user || !token) {
      return res.status(401).json({ message: `Anda belum registrasi` });
    }
    req.payload = user;
    next();
  },
};
