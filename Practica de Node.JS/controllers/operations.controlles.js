const  {validationReslt}= require('express-validator');


exports.sum = (req, res, next) =>{
    const errors = validationReslt(req);

    if(!errors.isEmpty()){
        const error = new Error('validation failed');
        error.statusCode = 422;
        error.data = errors.array();
        throw error;
    }
    try{
        const valueOne = +req.body.valueOne;
        const valueTwo = +req.body.valueTwo;
        const result = valueOne+ valueTwo;

        res.status(201).json({messange:"sum succes.",data:{result}})
    }catch(e){
        const error = new Error('Validation failed');
        error.statusCode = 500;
        error.data = e;
        throw error;
    }
    
    
};
exports.resta = (req, res, next) =>{
    const errors = validationReslt(req);

    if(!errors.isEmpty()){
        const error = new Error('validation failed');
        error.statusCode = 422;
        error.data = errors.array();
        throw error;
    }
    try{
        const valueOne = +req.body.valueOne;
        const valueTwo = +req.body.valueTwo;
        const result = valueOne - valueTwo;

        res.status(201).json({messange:"sum succes.",data:{result}})
    }catch(e){
        const error = new Error('Validation failed');
        error.statusCode = 500;
        error.data = e;
        throw error;
    }
    
    
};
exports.mult = (req, res, next) =>{
    const errors = validationReslt(req);

    if(!errors.isEmpty()){
        const error = new Error('validation failed');
        error.statusCode = 422;
        error.data = errors.array();
        throw error;
    }
    try{
        const valueOne = +req.body.valueOne;
        const valueTwo = +req.body.valueTwo;
        const result = valueOne * valueTwo;

        res.status(201).json({messange:"sum succes.",data:{result}})
    }catch(e){
        const error = new Error('Validation failed');
        error.statusCode = 500;
        error.data = e;
        throw error;
    }
    
    
};
exports.div = (req, res, next) =>{
    const errors = validationReslt(req);

    if(!errors.isEmpty()){
        const error = new Error('validation failed');
        error.statusCode = 422;
        error.data = errors.array();
        throw error;
    }
    try{
        const valueOne = +req.body.valueOne;
        const valueTwo = +req.body.valueTwo;
        const result = valueOne / valueTwo;

        res.status(201).json({messange:"sum succes.",data:{result}})
    }catch(e){
        const error = new Error('Validation failed');
        error.statusCode = 500;
        error.data = e;
        throw error;
    }
    
    
};

