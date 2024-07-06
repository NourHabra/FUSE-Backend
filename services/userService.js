const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function findAll() {
  return await prisma.users.findMany({
    where: {
      status: { not: "Deleted" }
    },
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      birth: true,
      role: true
    }
  });
}

async function findById(id) {
  return await prisma.users.findUnique({
    where: {
      id,
      status: { not: "Deleted" }
    },
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      birth: true,
      role: true,
      status: true
    }
  });
}

async function updateUser(id,  data ) {
  if (data.birth) data.birth = new Date(data.birth).toISOString();
  return await prisma.users.update({
    where: {
      id
    },
    data,
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      birth: true,
      role: true
    }
  });
}

async function deleteUser(id) {
  return await prisma.users.update({
    where: {
      id
    },
    data: {
      status: "Deleted"
    }
  });
}

async function deleteUserFromDB(id) {
  await prisma.accounts.deleteMany({
    where: {
      userId : id
    }
  });

  return await prisma.users.delete({
    where: {
      id
    }
  });
}

async function create(name, role, email, phone, birth, password) {
  return await prisma.users.create({
    data: { name, role, email, phone, birth: new Date(birth).toISOString(), password },
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      birth: true,
      role: true
    }
  });
}

async function findByEmail(email) {
  return await prisma.users.findUnique({
    where: { email }
  });
}

module.exports = {
  findAll,
  findById,
  updateUser,
  deleteUser,
  create,
  findByEmail,
  deleteUserFromDB
};
