import express from "express"
import { getProducts, createProduct, uptdatedProduct, deleteProduct, getProduct } from "../controllers/product.controller.js"

const router = express.Router()

router.get("/", getProducts)
router.get("/:id", getProduct)
router.post('/', createProduct)
router.put('/:id', uptdatedProduct)
router.delete('/:id', deleteProduct)

export default router