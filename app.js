require('dotenv').config();

const express = require('express');

const app = express();

// app.get('/api',(req,res) => {
//     res.json({
//         success:1,
//         message:'Working'
//     });
// });
app.use(express.json());
const userRouter = require("./api/drivers/driver.router");
const adminRouter = require("./api/admins/admin.router");
app.use("/api/drivers",userRouter);
app.use("/api/admins",adminRouter);

app.listen(process.env.APP_PORT, () => {
    console.log('Server is up and running on port ',process.env.APP_PORT);
});