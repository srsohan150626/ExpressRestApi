const jwt = require('jsonwebtoken')

exports.createToken = (req,res)=>{
    let payload={
        exp:Math.floor(Date.now() / 1000) + (60*60),
        data:{Name:"Sohanur Rahaman",City:"Dhaka",admin:true}
    }
    let token = jwt.sign(payload, "SecretKey150626");
    res.send(token);
}

exports.decodeToken = (req,res)=>{
    let token = req.headers['token'];
    jwt.verify(token, "SecretKey150626", function (err, decoded) {
        if(err) {
            res.status(401).json({success: "false", data: err})
        } else {
            res.status(200).json({success: "true", data: decoded})
        }
    })
}

exports.issueToken = (req,res)=>{
    let payload={
        exp:Math.floor(Date.now() / 1000) + (60*60),
        data:{Name:"Sohanur Rahaman",City:"Dhaka",admin:true}
    }
    let token = jwt.sign(payload, "SecretKey150626");
    res.send(token);
}