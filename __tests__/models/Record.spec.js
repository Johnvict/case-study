/**
 * @jest-environment node
 */

const mongoose = require('mongoose');
const Record = require('../../src/models/Record');

const TEST_DB =
  'mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@cluster0.xkpbs.mongodb.net/getircase-study?retryWrites=true&w=majority';

describe('The Record Model', () => {
  jest.setTimeout(15000);
  it('Should fetch 2 data from database', async () => {
    await mongoose.connect(TEST_DB, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    const record = await Record.find().limit(2);
    expect(record.length).toBe(2);
  });
});
