const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { handleError, notEmpty } = require('./errorController');

dotenv.config();

async function index(req, res) {
    const allBeneficiaries = await prisma.beneficiaries.findMany();
    return res.json(allBeneficiaries);
}

async function show(req, res) {
    try {
        const id = parseInt(req.params.id);
        if(isNaN(id)){
            return res.status(409).json({error: "Invaled id type (must be int)"})
        }
        const beneficiaries = await prisma.beneficiaries.findMany({
            where: {
                OR: [
                    {rUser: id},        
                    {aUser: id, accepted: true},
                ],
            },
        });

        if (beneficiaries.length <= 0) {
            return res.status(404).json({ message: 'Beneficiaries not found' });
        }
        return res.json(beneficiaries);

    } catch (error) {
        await handleError(error, res);
    }
}

async function store(req, res) {
    try{
        const { aID, rID } = req.body;
        notEmpty(aID, rID);

        const beneficiarie = await prisma.beneficiaries.findMany({
            where: {
                OR: [
                    {
                        rUser: parseInt(rID),
                        aUser: parseInt(aID)
                    },
                    {
                        rUser: parseInt(aID),
                        aUser: parseInt(rID)
                    }
                ]
            }
        });

        if(beneficiarie.length != 0){
            return res.status(409).json({ message: 'beneficiaries true' });
        }
        beneficiarie = await prisma.beneficiaries.create({
            data: {
                rUser: parseInt(rID),
                aUser: parseInt(aID)
            }
        })
        return res.statue(201).json(beneficiarie);

    }catch (error){
        await handleError(error, res);
    }
}

// get edit|create page
async function create(req, res) {

}

async function update(req, res) {
    try{
        const {id, accepted} = req.Body;
        const beneficiarie = await prisma.beneficiaries.findUnique({
            where:{
                id: parseInt(id),
            }
        })

        if(beneficiarie){
            await prisma.beneficiaries.update({
                where: {
                    id,
                },
                data: {
                    accepted: accepted === "Ture"? true : false,
                }
            })
        }

    }catch (error){
        await handleError(error, res);
    }
}

async function destroy(req, res) {
    try {
        const deletedBeneficiarie = await prisma.beneficiaries.delete({
            where: {
                id: parseInt(req.params.id),
            },
        });
        if (!deletedBeneficiarie) {
            return res.status(404).json({ message: 'Beneficiarie not found' });
        }
        return res.json({ message: 'Beneficiarie deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = { index, show, store, create, update, destroy };
