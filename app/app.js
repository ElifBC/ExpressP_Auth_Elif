// import express
//Third Party Modules
import express from "express"; 
import cookieParser from "cookie-parser";
import logger from 'morgan';
import session from "express-session";

// ES Modules fix for __dirname
import path, {dirname} from 'path';
import {fileURLToPath} from 'url';
//const url = require("url").URL;
const __dirname= dirname(fileURLToPath(import.meta.url));

// Auth step 1 - import modules
import passport from 'passport';
import passportLocal from 'passport-local';
import flash from 'connect-flash';

// Auth step2 - define our auth strategy
let localStrategy = passportLocal.Strategy;

// Auth step3 - import the user model
import User from './models/user.js';

// Import Mongoose Module
import mongoose from 'mongoose';

// Configuration module
import { MongoURI, Secret } from "../config/config.js";   

// Import Router
import indexRouter from '../app/routes/index.route.server.js';
import contactsRouter from './routes/contacts.route.server.js';
import authRouter from './routes/auth.route.server.js';

// instantiate app-server
const app = express();

// Complete the dB Conpfiguration
mongoose.connect(MongoURI);
const db = mongoose.connection;

//Listen for connection success or error
db.on('open', () => console.log("Connected to MongoDB"));
db.on('error', () => console.log("Mongo connection error"));

// setup ViewEngine EJS
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

// Auth step 4 is already done - setup Express Session
app.use(session({
    secret: Secret,
    saveUninitialized: false,
    resave:false
}));

// Auth step5 - Setup the flash messages
app.use(flash());

// Auth step 6 - Initialize passport and session
app.use(passport.initialize());
app.use(passport.session());

// Auth step 7 - Implement the Auth strategy
passport.use(User.createStrategy());

// Auth step 8 - Setup Serialization and deserialization
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// use routes
app.use('/', indexRouter);
app.use('/', contactsRouter);
app.use('/', authRouter);


export default app;