/**
 * @jest-environment node
 */

const config = require('../../src/config');
const supertest = require('supertest');
// import {disconnect} from '@tests/utils/mongoose';

const testApp = () => supertest(config.app);



let response;



describe('Getting a list of Records', () => {
  jest.setTimeout(15000);
  beforeAll( async() => {
    const getRecord = async (payload = {
      startDate: '2015-01-26',
      endDate: '2018-02-02',
      minCount: 1200,
      maxCount: 1500,
    }) => {
      response = await testApp().post('/records').send(payload);
    };

    await getRecord();
  })

  it('Should return status code 200, ', async () => {
    expect(response.statusCode).toBe(200);
  });

  
  it('Should return response as object, ', async () => {
    expect(typeof response.body).toBe('object');
  });

  it('Response Body Should have a field code as zero, ', async () => {
    expect(response.body.code).toBe(0);
  });


  it('Response Body Should have a msg field which is "Success" ', async () => {
    expect(response.body.msg).toBe('Success');
  });


  it('Response Body Should have a "records" field which must be an "array"', async () => {
    expect(Array.isArray(response.body.records)).toBe(true);
  });
  
  it('Should return status code 404', async () => {
    const response = await testApp().get('/not-found');
    expect(response.statusCode).toBe(404);
  });

  it('Should return status code 200', async () => {
    const response = await testApp().get('/');
    expect(response.statusCode).toBe(200);
  });

  // it('Response should return validation error with message "failed" and code 1', async () => {
  //   badPayload = {
  //     "startDate": "2015-01-26",
  //     "endDate": "2018-02-02",
  //     "minCount": 1200 
  //   };
  //   await getRecord(badPayload);
  //   expect((response.body.code === 1) && (response.body.message === "failed")).toBe(true);
  // });
});

// describe('Getting a list of Records', () => {
// });

// describe('Getting a list of Records', () => {
// });

// describe('Getting a list of Records', () => {
// });

// describe('Getting a list of Records', () => {
// });

// describe('Getting a list of Records', () => {
// });


// afterAll(async () => await disconnect())
