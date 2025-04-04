const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const prodRoutes = require("./routes/prodRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/produtos", prodRoutes);
app.use("/usuarios", userRoutes);

// Definição da rota para o caminho raiz
app.get("/", (req, res) => {
    res.send("Página inicial");
});

app.listen(2000, () => {
    console.log("Servidor rodando na porta 2000");
});
