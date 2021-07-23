// const recordModel = require("./../models/Record");
// const Record = require("./../models/Record");
// const mongoose = require("mongoose");

const Record = require('../models/Record');

/**
 * Record List Request Handler - It filters records from the Database and return in the specified format
 * @param {*} req
 * @param {*} res
 * @returns JSON
 */
module.exports.records = async (req, res) => {
  const { minCount, maxCount } = req.body;
  const startDate = new Date(req.body.startDate);
  const endDate = new Date(req.body.endDate);

  try {
    const rec = await Record.aggregate([
      { $unwind: '$counts' },
      {
        $group: {
          _id: {
            _id: '$_id',
            totalCounts: { $sum: '$counts' },
            key: '$key',
            createdAt: '$createdAt',
          },
        },
      },
      {
        $project: {
          _id: 0,
          key: '$_id.key',
          createdAt: '$_id.createdAt',
          totalCount: '$_id.totalCounts',
        },
      },
      {
        $match: {
          createdAt: {
            $gte: startDate,
            $lte: endDate,
          },
          totalCount: { $gte: minCount, $lte: maxCount },
        }
      },
      { $sort : { createdAt : 1 } }
    ]);

    return res.status(200).json({
      code: 0,
      msg: 'Success',
      records: rec,
    });
  } catch (error) {
    console.log({ error: error.message });
    return res.status(500).json({
      code: 1,
      msg: 'failed',
      description: 'Something went wrong, please try again',
    });
  }
};
