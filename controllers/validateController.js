const isEMail = require("isemail");

async function matchPassword( password, rPassword ){
    if(!password || parseInt(String.toString(password).trim().length) <= 0){
        error = new Error("Empty parameter");
        error.meta = {error: `Empty parameter`, paramName: "password"}; 
        throw error;
    }else if(!rPassword || parseInt(String.toString(rPassword).trim().length) <= 0){
        error = new Error("Empty parameter");
        error.meta = {error: `Empty parameter`, paramName: "rPassword"}; 
        throw error;
    }

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

async function isEmail(email) {
    if(!email || parseInt(String.toString(email).trim().length) <= 0 ){
        error = new Error("Empty parameter");
        error.meta = {error: `Empty parameter`, paramName: "Email"}; 
        throw error;
    }
    
    if(isEMail.validate(email)){
        return email;
    }else{
        error = new Error("Invaled email");
        error.meta = {error: `Invaled email form`, paramName: "Email"}; 
        throw error;
    }
}

async function isRole(role) {
    if(!role || String.toString(role).trim().length <= 0 ){
        error = new Error("Empty parameter");
        error.meta = {error: `Empty parameter`, paramName: "role"}; 
        throw error;
    }
    
    if(role in Role){
        return role;
    }else{
        error = new Error("Invaled role");
        error.meta = {error: `Invaled role form`, paramName: "role"}; 
        throw error;
    }
}

module.exports = {matchPassword, notEmpty, isEmail, isRole};
