const express = require("express");
const userRoutes = require("./routes/userRoutes");
const authRouter = require("./routes/authRoutes");
const beneficiarieRouter = require("./routes/beneficiarieRoutes");

const app = express();

app.use(express.static('public'));
app.use(express.json());

app.use("/user", userRoutes);
app.use("/auth", authRouter);
app.use("/beneficiarie", beneficiarieRouter);

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});

