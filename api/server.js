const express = require('express');
const cors = require('cors');
const mongoConfig = require('./utils/mongoConnect');

mongoConfig.connectMongo();

// Start app
const app = express();

app.use(cors());

/** Start listening on port 3001 */
app.listen(3001, function() {
  console.log('Starting API server, listening on port 3001');
});

/** Rooms GET endpoint, return list of registered ROOMS in the system
 *      (Contains mocked data for 'fetch exercise')
 */
app.get('/rooms', (req, res) => {
  let rooms_mock = [
    { building: 'Mullin', number: 'M201' },
    { building: 'Mullin', number: 'M101' },
    { building: 'Central', number: '015' },
  ];
  console.log("Sending mock response for sample endpoint '/rooms'");
  res.send(rooms_mock);
});
