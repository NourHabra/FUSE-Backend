const { Prisma } = require('@prisma/client');

async function handleError(error, res) {
    console.log(error);
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.meta.target[0] === 'phone') {
                res.status(409).json({ error: 'A user with this phone already exists' });
            } else if (error.meta.target[0] === 'email') {
                res.status(409).json({ error: 'A user with this email already exists' });
            } else {
                res.status(500).json({ error: 'An error occurred while creating the user' });
            }
    } else if (error.meta === "Empty parameter"){
        res.status(409).json({ error: 'Empty parameter' });
    } else if (error.meta === "Password is short"){
        res.status(409).json({ error: 'Password is short' });
    } else if (error.meta === "No match"){
        res.status(409).json({ error: "Passwords doesn't match" });
    }else{
        res.status(500).json({ error: 'An unknown error occurred' });
    }
}

async function matchPassword( password, rPassword ){
    error = new Error("password error");
    if (parseInt(password.length) < 6){ 
        error.meta = "Password is short"; throw error;
    }else if (password != rPassword) {
        error.meta = "No match"; throw error;
    }
}

async function notEmpty(...args){
    error = new Error("Empty parameter");
    args.forEach((arg)=>{
        if(!arg){
            error.meta = "Empty parameter"; throw error;
        }
    });
}

module.exports = {handleError, matchPassword, notEmpty};