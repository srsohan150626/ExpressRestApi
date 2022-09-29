const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
    let token = req.headers['token'];
    jwt.verify(token, "SecretKey150626", function (err, decoded) {
        if(err) {
            res.status(401).json({success: "false", data: err})
        } else {
           next()
        }
    })
}