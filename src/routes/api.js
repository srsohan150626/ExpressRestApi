const express = require('express')
const HelloController = require("../controllers/HelloController");
const StudentsController = require("../controllers/StudentsController");
const router = express.Router();

router.get("/hello-get", HelloController.HelloGet)
router.post("/hello-post", HelloController.HelloPost)

//mongoose route
router.get("/students", StudentsController.index)
router.post("/students", StudentsController.insert)
router.post("/student/:id", StudentsController.update)
router.get("/student/delete/:id", StudentsController.delete)

module.exports = router;