const express = require("express");
const userRoutes = require("./routes/userRoutes");
const authRouter = require("./routes/authRoutes");
const beneficiarieRouter = require("./routes/beneficiarieRoutes");
const merchantRoutes = require("./routes/merchantRoutes");
const accountRoutes = require("./routes/accountRoutes");
const cardRoutes = require("./routes/cardRoutes");
const transactionRoutes = require("./routes/transactionRoutes");

PORT = process.env.PORT | 3000;

const app = express();

app.use(express.static("public"));
app.use(express.json());

app.get("/", async (req, res) => {
	res.json({ msg: "Hello World, I am alive!" });
});

app.use("/user", userRoutes);
app.use("/auth", authRouter);
app.use("/beneficiarie", beneficiarieRouter);
app.use("/merchant", merchantRoutes);
app.use("/account", accountRoutes);
app.use("/card", cardRoutes);
app.use("/transaction", transactionRoutes);

app.listen(PORT, () => {
	console.log("Server listening on port 3000");
});
