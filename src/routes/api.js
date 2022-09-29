const express = require('express')
const HelloController = require("../controllers/HelloController");
const StudentsController = require("../controllers/StudentsController");
const JWTController = require("../controllers/JWTController");
const TokenVerifyMiddleware = require("../middleware/TokenVerifyMiddleware");

const router = express.Router();

router.get("/hello-get", HelloController.HelloGet)
router.post("/hello-post", HelloController.HelloPost)

//student crud
router.get("/issue/token", JWTController.issueToken)
router.get("/students", TokenVerifyMiddleware, StudentsController.index)
router.post("/students", TokenVerifyMiddleware, StudentsController.insert)
router.post("/student/:id", TokenVerifyMiddleware, StudentsController.update)
router.get("/student/delete/:id", TokenVerifyMiddleware, StudentsController.delete)

//practise jwt encode decode
router.get("/jwt", JWTController.createToken)
router.get("/decode/jwt", JWTController.decodeToken)

module.exports = router;