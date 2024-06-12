const userService = require('../services/userService');

const isCustomer = async (req, res, next) => {
    if (req.user.role === "Customer") {
        const user = await userService.findById(req.user.id);
        if (user && ["Deleted", "Banned", "Stopped"].includes(user.status)) {
            return res.status(401).json({ message: `Customer is ${user.status}` });
        } else if (!user) {
            return res.status(401).json({ message: `Customer is Deleted` });
        } else {
            next();
        }
    } else {
        return res.status(401).json({ message: 'Unauthorized' });
    }
}

const isMerchant = async (req, res, next) => {
    if (req.user.role === "Merchant") {
        const user = await userService.findById(req.user.id);
        if (user && ["Deleted", "Banned", "Stopped"].includes(user.status)) {
            return res.status(401).json({ message: `Merchant is ${user.status}` });
        } else if (!user) {
            return res.status(401).json({ message: `Merchant is Deleted` });
        } else {
            next();
        }
    } else {
        return res.status(401).json({ message: 'Unauthorized' });
    }
}

const isVendor = async (req, res, next) => {
    if (req.user.role === "Vendor") {
        const user = await userService.findById(req.user.id);
        if (user && ["Deleted", "Banned", "Stopped"].includes(user.status)) {
            return res.status(401).json({ message: `Vendor is ${user.status}` });
        } else if (!user) {
            return res.status(401).json({ message: `Vendor is Deleted` });
        } else {
            next();
        }
    } else {
        return res.status(401).json({ message: 'Unauthorized' });
    }
}

const isEmployee = async (req, res, next) => {
    if (req.user.role === "Employee") {
        const user = await userService.findById(req.user.id);
        if (user && ["Deleted", "Banned", "Stopped"].includes(user.status)) {
            return res.status(401).json({ message: `Employee is ${user.status}` });
        } else if (!user) {
            return res.status(401).json({ message: `Employee is Deleted` });
        } else {
            next();
        }
    } else {
        return res.status(401).json({ message: 'Unauthorized' });
    }
}

module.exports = { isCustomer, isEmployee, isMerchant, isVendor };
