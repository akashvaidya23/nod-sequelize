const usercontroller = require("../controllers/userController");

const router = require("express").Router();

router.post("/addUser", usercontroller.addUser);

router.get("/allUser", usercontroller.getAllUsers);

router.get("/:id", usercontroller.getOneUser);

router.put("/:id", usercontroller.updateUser);

router.delete("/:id", usercontroller.deleteUser);

module.exports = router;
