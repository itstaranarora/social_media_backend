import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decordedData;

    if (token && isCustomAuth) {
      decordedData = jwt.verify(token, "test");
      req.userId = decordedData?.id;
    } else {
      decordedData = jwt.decode(token);
      req.userId = decordedData?.sub;
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Token not provided" });
  }
};

export default auth;
