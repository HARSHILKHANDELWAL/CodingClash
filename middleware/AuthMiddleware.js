const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET; // Use environment variable for security

const authMiddleware = (allowedRoles) => {
  return (req, res, next) => {
    let token;

    // Check if Authorization header is present
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }
 
    // If no token, return unauthorized response
    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized, no token provided" });
    }

    try {
      // Verify JWT token
      const decoded = jwt.verify(token, JWT_SECRET);
      req.user = decoded; // Attach user data to request object

      if (!allowedRoles.includes(req.user.role[0])) {
        return res.status(403).json({ message: "Forbidden: Access Denied" });
      }

      next(); // Proceed to the next middleware/route
    } catch (error) {
      return res.status(401).json({ message: "Invalid token" });
    }
  };
};
module.exports = authMiddleware;
