const { Prisma } = require('@prisma/client');

async function handleError(error, res) {
    console.log(error);
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if(error.code === "P2003"){
            res.status(409).json({ error: `Foreign key constraint failed on the field ${error.meta.field_name}` });
        }else if (error.code === "P2002") {
            res.status(409).json({ error: `${error.meta.modelName} Unique constraint failed on the fields` ,fields:`${error.meta.target}`  });
        }
    } else if (error.meta){
        res.status(409).json(error.meta);
    }else{
        res.status(500).json({ error: 'An unknown error occurred' });
    }
}

async function matchPassword( password, rPassword ){
    error = new Error("password error");
    if (parseInt(password.length) < 6){ 
        error.meta ={error: "Password is short"} ; throw error;
    }else if (password != rPassword) {
        error.meta = {error: "Passwords don`t match"}; throw error;
    }
}

async function notEmpty(...args){
    error = new Error("Empty parameter");
    args.forEach((arg, index)=>{
        if(!arg){
            const paramName = `arg${index + 1}`;
            error.meta = {error: `Empty parameter`, paramName}; 
            throw error;
        }
    });
}

module.exports = {handleError, matchPassword, notEmpty};