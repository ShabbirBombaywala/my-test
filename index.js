let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let app = express();

let apiRoutes = require('./routes/api-routes');
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

const keys = require('./config/keys');

mongoose.connect(keys.mongoURI);
const db = mongoose.connection;
if (!db) console.log('Error connecting db');
else console.log('Db connected successfully');

app.use('/api', apiRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log('server is running on port 5000'));
