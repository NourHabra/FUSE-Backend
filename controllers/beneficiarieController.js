const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const { handleError } = require('./errorController');
const validate = require('./validateController');


async function index(req, res) {
  const allBeneficiaries = await prisma.beneficiaries.findMany();
  return res.json(allBeneficiaries);
}

async function show(req, res) {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(409).json({ error: "Invaled id type (must be int)" })
    }
    const beneficiaries = await prisma.beneficiaries.findMany({
      where: {
        OR: [
          { requstUser: id },
          { acceptUser: id, accepted: true },
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
  try {
    const { aID, rID } = req.body;
    validate.notEmpty(aID, rID);

    const beneficiaries = await prisma.beneficiaries.findMany({
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

    if (beneficiaries.length > 0) {
      if (!beneficiaries[0].accepted) {
        await prisma.beneficiaries.update({
          where: {
            id: beneficiaries[0].id
          },
          data: {
            accepted: true
          }
        })
      }
      return res.status(409).json({ message: 'beneficiaries true' });
    }

    const beneficiarie = await prisma.beneficiaries.create({
      data: {
        requstUser: parseInt(rID),
        acceptUser: parseInt(aID)
      }
    })
    return res.status(201).json({ message: 'beneficiaries true' });

  } catch (error) {
    await handleError(error, res);
  }
}

async function update(req, res) {
  try {
    const { id, accepted } = req.Body;
    validate.notEmpty(id, accepted);

    const beneficiarie = await prisma.beneficiaries.findUnique({
      where: {
        id: parseInt(id),
      }
    })

    if (beneficiarie) {
      await prisma.beneficiaries.update({
        where: {
          id,
        },
        data: {
          accepted: accepted === "Ture" ? true : false,
        }
      })
    }

  } catch (error) {
    await handleError(error, res);
  }
}

async function destroy(req, res) {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(409).json({ error: "Invaled id type (must be int)" })
  }
  try {
    const deletedBeneficiarie = await prisma.beneficiaries.delete({
      where: {
        id,
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

module.exports = { index, show, store, update, destroy };
