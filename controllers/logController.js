const { PrismaClient } = require('@prisma/client');
const logPrisma = new PrismaClient();

async function logServer(req, res) {
  const requestBody = { ...req.body };
  if (requestBody.jwt) {
    delete requestBody.jwt;
  }
  let userId;
  if (req.user) {
    if (typeof req.user.id !== 'undefined') {
      userId = req.user.id;
    }
  }

  const logData = {
    endpoint: req.originalUrl,
    body: JSON.stringify(requestBody),
    status: 1,
  };

  if (userId) {
    logData.userID = userId;
  }
  console.log(logData);

  try {
    await logPrisma.log.create({ data: logData });
    console.log('Log entry created successfully');
  } catch (error) {
    console.error('Error creating log entry:', error);
  }
}

async function logServerError(req, res, message) {
  const requestBody = { ...req.body };
  if (requestBody.jwt) {
    delete requestBody.jwt;
  }
  let userId;
  if (req.user) {
    if (typeof req.user.id !== 'undefined') {
      userId = req.user.id;
    }
  }

  const logData = {
    endpoint: req.originalUrl,
    body: JSON.stringify(requestBody),
    status: 0,
    message
  };

  if (userId) {
    logData.userID = userId;
  }
  console.log(logData);

  try {
    await logPrisma.log.create({ data: logData });
    console.log('Log entry created successfully');
  } catch (error) {
    console.error('Error creating log entry:', error);
  }
}

module.exports = { logServer, logServerError };