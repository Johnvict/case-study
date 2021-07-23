const mongoose = require('mongoose');

const recordsSchema = new mongoose.Schema(
  {
    key: {
      type: String,
    },
    createdAt: {
      type: Date,
      index: true,
    },
    counts: {
      type: Array,
      // type: mongoose.SchemaTypes.Array
    },
    value: {
      type: String,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);

module.exports = mongoose.model('records', recordsSchema);
