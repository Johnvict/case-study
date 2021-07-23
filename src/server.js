const app = require('./config');
const validator = require('./middleware/validator');
const recordsCtrl = require('./controllers/recordController');

app.get('/', (req, res) =>
  res.status(200).json({
    code: 0,
    msg: "App is running. Send a post request to '/records'",
  })
);

/**
 * Get filtered Records Based on sent Parameters
 * @returns
 */
app.post('/records', validator.validateListRecords(), (req, res) =>
  recordsCtrl.records(req, res)
);

app.use('*', (req, res, next) =>
  res.status(404).json({
    code: 4,
    message: 'failed',
    description: 'No such url found on this server',
  })
);
