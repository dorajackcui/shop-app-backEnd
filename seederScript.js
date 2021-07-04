import productData from './data/products.js'
import connectDB from './config/db.js'
import Product from './models/Product.js'
import dotenv from 'dotenv'

dotenv.config()
connectDB()

const importData = async () => {
  try {
    await Product.deleteMany({})

    await Product.insertMany(productData)

    console.log("Data Import Success")

    process.exit()
  } catch (error) {
    console.error("Error with data import", error)
    process.exit(1)
  }
};

importData()