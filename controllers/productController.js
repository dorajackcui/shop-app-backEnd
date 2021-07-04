import Product from '../models/Product.js'

export const getProducts = async(req, res) => {
  try {
    const products = await Product.find({})
    res.json(products)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server Error' })
  }
}

export const getProductById = async(req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    res.json(product)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server Error' })
  }
}
