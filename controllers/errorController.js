const { PrismaClient, Prisma, Role } = require('@prisma/client');
const prisma = new PrismaClient();

async function handleError(error, res, req) {
  //console.log(error);
  let error_message = "";
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === "P2003") {
      error_message = `Foreign key constraint failed on the field ${error.meta.field_name}`;
      res.status(409).json({ error: error_message });
    } else if (error.code === "P2002") {
      error_message = `${error.meta.modelName} Unique constraint failed on the fields, fields: ${error.meta.target}`;
      res.status(409).json({ error: error_message, fields: `${error.meta.target}` });
    }
  } else if (error .code === "ERR_INVALID_ARG_TYPE") {
    error_message = `Invalid argument type (decryption error)`;
    res.status(409).json({ error: error_message });
  } else if (error.meta) {
    res.status(409).json(error.meta);
  } else {
    error_message = error;
    res.status(500).json({ error: 'An unknown error occurred' });
  }


  // for log Server
  const requestBody = { ...req.body };
	if (requestBody.jwt) {
	  delete requestBody.jwt;
	}

	if( req.user.id ){
		requestBody.userID = req.user.id;
	}
  
	console.log(`Destination: ${req.originalUrl}`);
	console.log(`Request Body: ${JSON.stringify(requestBody)}`);
	console.log(`Requset Failed ${error_message}`);
	//next();
}

module.exports = { handleError };