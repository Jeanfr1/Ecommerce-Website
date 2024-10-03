import express from "express";
import path from "path";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();

// Conectar ao MongoDB (configuração simplificada)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Conectado"))
  .catch((err) => console.error("Erro ao conectar ao MongoDB:", err));

// Middleware para servir arquivos estáticos
const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// Middleware para parsear JSON
app.use(express.json());

// Rotas e outros middlewares podem ser adicionados aqui...

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
