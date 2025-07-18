const express = require("express");
const cors = require("cors");
const app = express();
const session = require('express-session');

const passport = require('passport');
const authRoutes = require('./api/Auth/authRoutes.js');

app.use(cors());
app.use(express.json());



//route
app.use(session({ secret: 'YOUR_SESSION_SECRET', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', authRoutes);

app.use("/api/model/",require("./helper/Model.controller"))



module.exports = app;