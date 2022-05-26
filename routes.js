const student = require("./routes/student");
const employee = require("./routes/employee");

const routes = (app) => {
  app.use("/api/v1/student", student);
  app.use("/api/v1/employee", employee);

  // app.use(router);
};

module.exports = routes;
