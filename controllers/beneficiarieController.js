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
    const id = parseInt(await validate.isNumber(req.params.id, "id"));

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
    let { acceptUser, requstUser } = req.body;
    acceptUser = await validate.isNumber(acceptUser, "acceptUser");
    requstUser = await validate.isNumber(requstUser, "requstUser");

    const beneficiaries = await prisma.beneficiaries.findFirst({
      where: {
        OR: [
          {
            requstUser: parseInt(requstUser),
            acceptUser: parseInt(acceptUser)
          },
          {
            requstUser: parseInt(acceptUser),
            acceptUser: parseInt(requstUser)
          }
        ]
      }
    });

    if (beneficiaries.length > 0) {
      if (!beneficiaries[0].accepted) {
        await prisma.beneficiaries.update({
          where: {
            id: beneficiaries[0].id,
            acceptUser: requstUser
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
        requstUser: parseInt(requstUser),
        acceptUser: parseInt(acceptUser)
      }
    })
    return res.status(201).json({ message: 'sent' });

  } catch (error) {
    await handleError(error, res);
  }
}

async function update(req, res) {
  try {
    let { id, accepted } = req.Body;
    id = await validate.isNumber(id, "id");
    accepted = await validate.checkEmpty(accepted ,"accepted");

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
          accepted: accepted,
        }
      })
    }

  } catch (error) {
    await handleError(error, res);
  }
}

async function destroy(req, res) {
  const id = parseInt(await validate.isNumber(req.params.id, "id"));
  
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
    await handleError(error, res);
  }
}

module.exports = { index, show, store, update, destroy };
