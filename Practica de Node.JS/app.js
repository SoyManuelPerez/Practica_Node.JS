const express = require("Express");
const  bodyParse = requiere("body-parser");
const operationsRouter = requiere("./routers/operations.route");

const app = express();

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: true}));
//RUTA /sum
app.use('/oprtations',operationsRouter);

app.use((error,req,res,next)=>{
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({message,data});
});

module.exports = app;
