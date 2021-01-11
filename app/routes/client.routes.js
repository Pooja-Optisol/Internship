const { authJwt } = require("../middleware");
const controller = require("../controllers/client.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/book/user",
    [authJwt.verifyToken],
    controller.userBook
  );

  app.post(
    "/api/confirm/user",
    authJwt.verifyToken,
    controller.userConfirm
  )

//   app.post(
//     "/api/test/driver",
//     [authJwt.verifyToken, authJwt.isDriver],
//     controller.driverBook
//   );

//   app.post(
//     "/api/test/admin",
//     [authJwt.verifyToken, authJwt.isAdmin],
//     controller.adminBook
//   );
};