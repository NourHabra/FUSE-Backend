const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');

async function main() {
  // Create an employee user
  const adminUser = await prisma.users.create({
    data: {
      role: 'Admin',
      name: 'The Admin',
      email: 'admin@mail.com',
      phone: '9873334321',
      birth: new Date('1995-07-10'),
      password: await bcrypt.hash('admin12345', 10),
    },
  });

  // Create a customer user
  const customerUser = await prisma.users.create({
    data: {
      role: 'Customer',
      name: 'John Doe',
      email: 'john@example.com',
      phone: '1234567890',
      birth: new Date('1990-01-01'),
      password: await bcrypt.hash('password123', 10),
    },
  });

  const customerAccount1 = await prisma.accounts.create({
    data: {
      userId: customerUser.id,
      name: 'Customer Checking Account',
      type: 'Checking',
    },
  });

  const customerAccount2 = await prisma.accounts.create({
    data: {
      userId: customerUser.id,
      name: 'Customer Savings Account',
      type: 'Savings',
    },
  });

  await prisma.customer.create({
    data: {
      userId: customerUser.id,
      yearlyIncome: 50000,
    },
  });

  const customerCardId1 = generateRandomCardId();
  await prisma.cards.create({
    data: {
      id: customerCardId1,
      accountNumber: customerAccount1.id,
      cvv: 123,
      physical: true,
      PIN: 1234
    },
  });

  const customerCardId2 = generateRandomCardId();
  await prisma.cards.create({
    data: {
      id: customerCardId2,
      accountNumber: customerAccount2.id,
      cvv: 456,
      physical: false,
      PIN: 1234
    },
  });

  // Create a merchant user
  const merchantUser = await prisma.users.create({
    data: {
      role: 'Merchant',
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '0987654321',
      birth: new Date('1985-05-15'),
      password: await bcrypt.hash('password456', 10),
    },
  });

  const merchantAccount1 = await prisma.accounts.create({
    data: {
      userId: merchantUser.id,
      name: 'Merchant Checking Account',
      type: 'Checking',
    },
  });

  const merchantAccount2 = await prisma.accounts.create({
    data: {
      userId: merchantUser.id,
      name: 'Merchant Savings Account',
      type: 'Savings',
    },
  });

  await prisma.merchant.create({
    data: {
      userId: merchantUser.id,
      category: 'Food',
      workPermit: 'ABC123',
    },
  });

  const merchantCardId1 = generateRandomCardId();
  await prisma.cards.create({
    data: {
      id: merchantCardId1,
      accountNumber: merchantAccount1.id,
      cvv: 789,
      physical: true,
      PIN: 1234
    },
  });

  const merchantCardId2 = generateRandomCardId();
  await prisma.cards.create({
    data: {
      id: merchantCardId2,
      accountNumber: merchantAccount2.id,
      cvv: 102,
      physical: false,
      PIN: 1234
    },
  });

  // Create a vendor user
  const vendorUser = await prisma.users.create({
    data: {
      role: 'Vendor',
      name: 'Bob Johnson',
      email: 'bob@example.com',
      phone: '5551234567',
      birth: new Date('1980-12-25'),
      password: await bcrypt.hash('password789', 10),
    },
  });

  const vendorAccount1 = await prisma.accounts.create({
    data: {
      userId: vendorUser.id,
      name: 'Vendor Checking Account',
      type: 'Checking',
    },
  });

  const vendorAccount2 = await prisma.accounts.create({
    data: {
      userId: vendorUser.id,
      name: 'Vendor Savings Account',
      type: 'Savings',
    },
  });

  const vendorCardId1 = generateRandomCardId();
  await prisma.cards.create({
    data: {
      id: vendorCardId1,
      accountNumber: vendorAccount1.id,
      cvv: 345,
      physical: true,
      PIN: 1234
    },
  });

  const vendorCardId2 = generateRandomCardId();
  await prisma.cards.create({
    data: {
      id: vendorCardId2,
      accountNumber: vendorAccount2.id,
      cvv: 678,
      physical: false,
      PIN: 1234
    },
  });

  // Create an employee user
  const employeeUser = await prisma.users.create({
    data: {
      role: 'Employee',
      name: 'Emily Wilson',
      email: 'emily@example.com',
      phone: '9876543210',
      birth: new Date('1995-07-10'),
      password: await bcrypt.hash('password012', 10),
    },
  });

  const employeeAccount1 = await prisma.accounts.create({
    data: {
      userId: employeeUser.id,
      name: 'Employee Checking Account',
      type: 'Checking',
    },
  });

  const employeeAccount2 = await prisma.accounts.create({
    data: {
      userId: employeeUser.id,
      name: 'Employee Savings Account',
      type: 'Savings',
    },
  });

  const employeeCardId1 = generateRandomCardId();
  await prisma.cards.create({
    data: {
      id: employeeCardId1,
      accountNumber: employeeAccount1.id,
      cvv: 901,
      physical: true,
      PIN: 1234
    },
  });

  const employeeCardId2 = generateRandomCardId();
  await prisma.cards.create({
    data: {
      id: employeeCardId2,
      accountNumber: employeeAccount2.id,
      cvv: 234,
      physical: false,
      PIN: 1234
    },
  });

  console.log('Data populated successfully!');
}

function generateRandomCardId() {
  let cardId = '';
  for (let i = 0; i < 16; i++) {
    cardId += Math.floor(Math.random() * 10);
  }
  return cardId;
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
