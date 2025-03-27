const express = require("express");
const { ConnectDB } = require("./config/database");

const app = express();
const port = 3000;
const CookieParser = require("cookie-parser");

app.use(express.json());
app.use(CookieParser());

const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/requests");
const userRouter = require("./routes/user");

app.use(authRouter);
app.use(profileRouter);
app.use(requestRouter);
app.use(userRouter);

ConnectDB()
  .then(() => {
    console.log("Database connected");
    app.listen(port, () => console.log(`Server listening on port ${port}!`));
  })
  .catch((err) => {
    console.log("Error connecting to database", err);
  });
