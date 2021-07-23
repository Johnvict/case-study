// const recordModel = require("./../models/Record");
// const Record = require("./../models/Record");
// const mongoose = require("mongoose");

const Record = require("./../models/Record");

module.exports.records = async (req, res) => {
  console.log(req.body);
  const { minCount, maxCount } = req.body;
  
  const startDate = new Date(req.body.startDate);
  const endDate = new Date(req.body.endDate);
  console.log(startDate, endDate);
  console.table({ startDate, endDate, minCount, maxCount });

  // const endDate = new Date("2016-01-01");
  // const minCount = 50;
  // const maxCount = 200;

  // const rec2 = await Record.find();
  // console.log(rec2)
  // return res.status(200).json({
  //   code: 0,
  //   msg: "Success",
  //   records: rec2,
  // });

  try {
    let rec = await Record.aggregate([
      { $unwind: "$counts" },
      {
        $group: {
          _id: {
            _id: "$_id",
            totalCounts: { $sum: "$counts" },
            key: "$key",
            createdAt: "$createdAt",
          },
        },
      },
      {
        $project: {
          _id: 0,
          key: "$_id.key",
          createdAt: "$_id.createdAt",
          totalCount: "$_id.totalCounts",
        },
      },
      {
        $match: {
          createdAt: {
            $gte: startDate,
            $lte: endDate
          },
          totalCount: { $gte: minCount, $lte: maxCount },
        },
      },
    ]);

    return res.status(200).json({
      code: 0,
      msg: "Success",
      records: rec,
    });
  } catch (error) {
    console.log({ error: error.message });
    return res.status(500).json({
      code: 1,
      msg: "failed",
      description: "Something went wrong, please try again",
    });
  }
};

// module.exports = new Records();
// module.exports = new Records(recordModel);

// [
//   { $unwind: "$counts" },
//   {
//     $group: {
//       _id: {
//         _id: "$_id",
//         totalCounts: { $sum: "$counts" },
//         key: "$key",
//         createdAt: "$createdAt",
//       },
//     },
//   },
//   {
//     $project: {
//       _id: 0,
//       key: "$_id.key",
//       createdAt: "$_id.createdAt",
//       totalCount: "$_id.totalCounts",
//     },
//   },
//   {
//     $match: {
//       createdAt: {
//         $gte: ISODate("2015-12-28"),
//         $lte: ISODate("2016-01-05"),
//       },
//       totalCount: { $lte: 100 },
//     },
//   },
// ]
