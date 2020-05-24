
const path = require('path');
const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");


const users = require("./routes/api/users")
const posts = require('./routes/api/posts')

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));
app.get('/express_backend', (req, res) => {   res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); });
app.get('*', (req, res) => {   res.sendFile(path.join(__dirname+'/client/build/index.html')); });



app.use(cors());
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use('/uploads', express.static('uploads'))
app.use(bodyParser.json());
// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true },
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

  // Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
app.use("/api/posts", posts);

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));