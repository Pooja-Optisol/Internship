const { createUser, getDrivers, getDriversById, updateDriver, deleteDriver } = require("./driver.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/",checkToken,createUser);
router.get("/",checkToken,getDrivers);
router.get("/:id",checkToken,getDriversById);
router.put("/",checkToken,updateDriver);
router.delete("/:id",checkToken,deleteDriver);
module.exports = router;