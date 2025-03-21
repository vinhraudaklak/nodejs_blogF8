const express = require("express");
const router = express.Router();

const coursesController = require("../app/controller/CoursesController");

router.get("/create", coursesController.create);
router.post("/store", coursesController.store);
router.get("/:id/edit", coursesController.edit);
router.put("/:id", coursesController.updated );
router.delete("/:id", coursesController.destroy );
router.get("/:slug", coursesController.show);

module.exports = router;
