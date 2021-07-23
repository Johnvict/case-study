# Assessment
This app uses a mongoDb database. It implements a single endpoint that collects an object as follows:

**The request payload will include a JSON with 4 fields.**
 - “startDate” and “endDate” fields will contain the date in a “YYYY-MM-DD” format. You
should filter the data using “createdAt”
 - “minCount” and “maxCount” are for filtering the data. Sum of the “count” array in
the documents should be between “minCount” and “maxCount”.
Sample:

```
{
    "startDate": "2016-01-26",
    "endDate": "2018-02-02",
    "minCount": 2700,
    "maxCount": 3000
}
```

## Response Payload
Response payload should has 3 main fields.
 -  ```code``` is for status of the request. 0 means success. Other values may be used
for errors that you define.
 -  ```msg``` is for description of the code. You can set it to “success” for successful
requests. For unsuccessful requests, you should use explanatory messages.
 - ```records``` will include all the filtered items according to the request. This array should include items of ```key```, ```createdAt``` and ```totalCount``` which is the sum of the “counts” array in the document

**Sample:**
```
{
    "code": 0,
    "msg": "Success",
    "records": [
        {
            "key": "ttVqYttn",
            "createdAt": "2015-01-26T05:32:30.685Z",
            "totalCount": 1403
        },
        {
            "key": "XRIJowDZ",
            "createdAt": "2015-01-27T11:58:17.330Z",
            "totalCount": 1451
        },
    ]
}
```
#

# Setup Guide
 - Clone this Repository:
   - ```$ git clone https://github.com/Johnvict/case-study.git```
 - Navigate into app directory:
   - ```$ cd case-study```
 - Install dependencies
   - ```$ npm install```


#

# Running App
## Start app on devlopment
```
$ npm run start:dev
```
## Run Test
```
$ npm test
```
## Run Test With coverage
```
$ npm test -- --coverage
```

#
## Others
**App Deployed on Heroku**
  - [Heroku link](https://case-study-heroku.herokuapp.com)

**Documentation Link**
  - [Postman Documentation Link](https://documenter.getpostman.com/view/9029061/TzsZqTCE)