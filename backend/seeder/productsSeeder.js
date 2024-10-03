import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "../models/Product.js";
import connectDB from "../config/db.js";

// Carrega variáveis do .env
dotenv.config();

// Adiciona uma mensagem para depuração
console.log("Valor da MONGO_URI:", process.env.MONGO_URI);

// Conecta ao banco de dados
connectDB();

const products = [
  {
    name: "Produto 1",
    image: "/uploads/1.png",
    description: "Um pequeno ser, uma grande aventura.",
    price: 19.99,
    countInStock: 10,
    category: "Cartões Personalizados",
  },
  {
    name: "Produto 2",
    image: "/uploads/2.png",
    description:
      "Tes premiers mois - Cartão para acompanhar o desenvolvimento.",
    price: 24.99,
    countInStock: 15,
    category: "Cartões de Bebê",
  },
  {
    name: "Produto 3",
    image: "/uploads/3.png",
    description: "Je m’appelle Théa - Cartão decorativo.",
    price: 15.99,
    countInStock: 20,
    category: "Cartões Decorativos",
  },
  {
    name: "Produto 4",
    image: "/uploads/4.png",
    description: "1 Mois - Cartão de acompanhamento mensal.",
    price: 12.99,
    countInStock: 25,
    category: "Cartões de Meses",
  },
  {
    name: "Produto 5",
    image: "/uploads/5.png",
    description: "2 Mois - Cartão para comemorar os dois meses.",
    price: 13.99,
    countInStock: 18,
    category: "Cartões de Meses",
  },
  {
    name: "Produto 6",
    image: "/uploads/6.png",
    description:
      "3 Mois - Cartão de três meses, perfeito para um marco especial.",
    price: 13.99,
    countInStock: 22,
    category: "Cartões de Meses",
  },
];

const importData = async () => {
  try {
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log("Produtos adicionados com sucesso!");
    process.exit();
  } catch (error) {
    console.error(`Erro ao adicionar produtos: ${error}`);
    process.exit(1);
  }
};

importData();
