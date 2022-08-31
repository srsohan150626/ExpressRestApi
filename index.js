const app = require("./app");
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'})

app.listen(process.env.PORT, function () {
    console.log("Server run successfully on port "+process.env.PORT);
})