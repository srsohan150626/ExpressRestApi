exports.HelloGet = (req, res) => {
    res.status(200).json({success: "true", data: "Hello express rest api"});
}
exports.HelloPost = (req, res) => {
    res.status(201).json({success: "true", data: "Hello express rest api"});
}
