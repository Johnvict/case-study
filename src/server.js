const {app, PORT} = require('./config');

app.listen(PORT, () => {
  console.log(`app listening on PORT ${PORT}`);
});

