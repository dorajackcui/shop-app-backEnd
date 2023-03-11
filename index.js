import express from 'express'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

//Connect mongoDB Atlas
connectDB()

//Routes 
app.get('/', (req, res) => {
  res.json({ message: 'Backend is running now' });
});

app.use('/products', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));