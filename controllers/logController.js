// for log Server

async function logServer(req, res) {
    const requestBody = { ...req.body };
	if (requestBody.jwt) {
	  delete requestBody.jwt;
	}

	if( req.user.id){
		requestBody.userID = req.user.id;
	}
  
	console.log(`Destination: ${req.originalUrl}`);
	console.log(`Request Body: ${JSON.stringify(requestBody)}`);
	console.log("Requset Suscessful");
	return;
}