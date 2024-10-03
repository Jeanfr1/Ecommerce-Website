import mongoose from "mongoose";

// Definindo o esquema do Produto
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true, // Adiciona automaticamente os campos de criação e atualização
  }
);

// Criação do modelo Produto a partir do esquema
const Product = mongoose.model("Product", productSchema);

export default Product;
