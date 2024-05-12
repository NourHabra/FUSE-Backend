const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

async function index(req, res) {
  const allUsers = await prisma.users.findMany();
  return res.json(allUsers);
}

async function show(req, res) {
  try {
    const user = await prisma.users.findUnique({
      where: {
        id: parseInt(req.params.id),
      },
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.json(user);

  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
}

// get edit|create page
async function create(req, res) {

}

// Update a users by ID
async function update(req, res) {

}

async function destroy(req, res) {
  try {
    const deletedUser = await prisma.users.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.json({ message: 'User deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = { index, show, create, update, destroy };
