const isCustomer = (req, res, next) => {
    if(req.user.role === "Customer"){
        next();
    } else {
        return res.status(401).json({ message: 'Unauthorized only admin' });
    }
}

const isMerchant = (req, res, next) => {
    if(req.user.role === "Merchant"){
        next();
    } else {
        return res.status(401).json({ message: 'Unauthorized only admin' });
    }
}

const isVendor = (req, res, next) => {
    if(req.user.role === "Vendor"){
        next();
    } else {
        return res.status(401).json({ message: 'Unauthorized only admin' });
    }
}

const isEmployee = (req, res, next) => {
    if(req.user.role === "Employee"){
        next();
    } else {
        return res.status(401).json({ message: 'Unauthorized only admin' });
    }
}


module.exports = { isCustomer, isEmployee, isMerchant, isVendor};