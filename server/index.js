const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routeIndex = require('./routes/index.js');

const app = express();
var PORT = process.env.PORT || 5050;

app.use(cors());
app.use(bodyParser.json());
app.use('/', routeIndex);

mongoose
  .connect(
    'mongodb+srv://tarunkr:KLw3aFpO1hZkTbvp@cluster0.vxfsl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on:${PORT} and DB is connected`));
  })
  .catch((err) => console.log(err.message));
