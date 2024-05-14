const { PrismaClient, Prisma, Role } = require('@prisma/client');
const prisma = new PrismaClient();

async function handleError(error, res) {
  console.log(error);
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === "P2003") {
      res.status(409).json({ error: `Foreign key constraint failed on the field ${error.meta.field_name}` });
    } else if (error.code === "P2002") {
      res.status(409).json({ error: `${error.meta.modelName} Unique constraint failed on the fields`, fields: `${error.meta.target}` });
    }
  } else if (error.meta) {
    res.status(409).json(error.meta);
  } else {
    res.status(500).json({ error: 'An unknown error occurred' });
  }
}

module.exports = { handleError };