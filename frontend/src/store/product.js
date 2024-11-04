import { create } from "zustand";
import axios from "axios";

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),
    createProuduct: async (newProduct) => {
        if (!newProduct.name || !newProduct.image || !newProduct.price) {
            return { success: false, message: "Please fill in all fields." }
        }
        // const res = await fetch('/api/products', {
        //     method: 'POST',
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(newProduct)
        // })
        const res = axios.post('/api/products', data)
        const data = await res.json()
        set((state) => ({ products: [...state.products, data.data] }))
        return { success: true, message: 'Product created successfully.' }
    }
}))