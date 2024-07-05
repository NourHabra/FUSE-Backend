// for log Server

async function logServer(req, res) {
	const requestBody = { ...req.body };
	if (req.user) {
    const requestBody = { ...req.body };
    if (requestBody.jwt) {
      delete requestBody.jwt;
    }

    if (typeof req.user.id !== 'undefined') {
      requestBody.userID = req.user.id;
    }
  }
  
	console.log(`Destination: ${req.originalUrl}`);
	console.log(`Request Body: ${JSON.stringify(requestBody)}`);
	console.log("Requset Suscessful");
	return;
}

module.exports = { logServer };