const app = require("./config");

app.get("/", (req, res, next) =>
  res.json({ app: "Practice app", environment: "development" })
);

app.post("/", (req, res, next) =>
  res.json({ app: "Practice app", environment: "development" })
);
