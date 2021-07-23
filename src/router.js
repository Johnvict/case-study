const router = require('express').Router()
const validator = require('./middleware/validator');
const recordsCtrl = require('./controllers/recordController');

/**
 * Responds to base URL
 */
router.get('/', (req, res) =>
  res.status(200).json({
    code: 0,
    msg: "App is running. Send a post request to '/records'",
  })
);

/**
 * Get filtered Records Based on sent Parameters
 * @returns
 */
router.post('/records', validator.validateListRecords(), (req, res) =>
  recordsCtrl.records(req, res)
);


/**
 * Handles Unwanted URLs as 404
 */
router.use('*', (req, res, next) =>
  res.status(404).json({
    code: 4,
    message: 'failed',
    description: 'No such url found on this server',
  })
);


module.exports = router;