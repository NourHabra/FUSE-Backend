const express = require("express");
const helmet = require("helmet");
const cors = require('cors');

const userRoutes = require("./routes/userRoutes");
const authRouter = require("./routes/authRoutes");
const beneficiarieRouter = require("./routes/beneficiarieRoutes");
const merchantRoutes = require("./routes/merchantRoutes");
const accountRoutes = require("./routes/accountRoutes");
const cardRoutes = require("./routes/cardRoutes");
const transactionRoutes = require("./routes/transactionRoutes");
const keyRoutes = require("./routes/keyRoutes");
const encry = require("./middleware/encryptionMiddleware");
const {authenticateJWT} = require('./middleware/authMiddleware');


PORT = process.env.PORT | 3030;

const app = express();

const corsOptions = {
	origin: '*', // Allow requests from all origins
	optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));

app.use(express.static("public"));
app.use(express.json());
app.use(helmet());

// app.use((req, res, next) => {
// 	res.setHeader('Access-Control-Allow-Origin', '*');
// 	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
// 	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
// 	next();
// });

app.get("/", async (req, res) => {
	res.json({ msg: "Hello World, I am alive!" });
});

app.use("/key", keyRoutes);

app.use("/auth", authRouter);

app.use(authenticateJWT);

//app.use(encry.decryption);

app.use("/user", userRoutes);
app.use("/beneficiarie", beneficiarieRouter);
app.use("/merchant", merchantRoutes);
app.use("/account", accountRoutes);
app.use("/card", cardRoutes);
app.use("/transaction", transactionRoutes);

app.listen(PORT, () => {
	console.log("Server listening on port ", PORT);
});
