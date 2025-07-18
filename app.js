const { Client } = require("pg");
const app = require("./server.js");
const sequelize = require("./utils/DBConfig.js");
const User = require("./models/User");
const Contest=require("./models/Contest.js")
const Problems=require("./models/Problems.js")
const Submissions=require("./models/Submissions.js")

const cookieParser = require("cookie-parser");

const config = require("./config/config.js");
  


require("dotenv").config();
app.use(cookieParser());

// Routes
app.listen(3000, (err) => {
  if (err) throw err;
  console.log(`Server up on ${process.env.PORT}`);
});

   
async function syncDatabase() {
  await sequelize.sync({ alter: true });
  console.log("Database synced!");
}
 
syncDatabase().catch(console.error);