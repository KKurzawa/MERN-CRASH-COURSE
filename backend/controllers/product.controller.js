import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json({ succes: true, data: products })
    } catch (err) {
        console.log('error in fetching products:', err.message)
        res.status(500).json({ succes: false, message: "Server error" })
    }
}

export const getProduct = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: 'Invalid product Id' })
    }

    try {
        const product = await Product.findById(id)
        res.status(200).json({ succes: true, data: product })
    } catch (err) {
        res.status(500).json({ success: false, message: 'Server Error' })
    }
}

export const createProduct = async (req, res) => {
    const product = req.body

    if (!product.name || !product.price || !product.name) {
        return res.status(400).json({ success: false, message: "Please provide all fields" })
    }

    const newProduct = new Product(product)

    try {
        await newProduct.save()
        res.status(201).json({ success: true, data: newProduct })
    } catch (err) {
        console.log('Error in create product:', err.message)
        res.status(500).json({ success: false, message: 'Server error' })
    }
}

export const uptdatedProduct = async (req, res) => {
    const { id } = req.params

    const product = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: 'Invalid product Id' })
    }

    try {
        const uptdatedProduct = await Product.findByIdAndUpdate(id, product, { new: true })
        res.status(200).json({ success: true, data: uptdatedProduct })
    } catch (err) {
        res.status(500).json({ success: false, message: 'Server error' })
    }
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: 'Invalid product Id' })
    }

    try {
        await Product.findByIdAndDelete(id)
        res.status(200).json({ succes: true, message: "Product deleted" })
    } catch (err) {
        res.status(500).json({ success: false, message: 'Server Error' })
    }
}