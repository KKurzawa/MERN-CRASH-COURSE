import { useState } from "react"
import { useSnackbar } from 'notistack';
import axios from "axios";
import { useNavigate } from 'react-router-dom'

const CreatePage = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate()


    const handleAddProduct = (e) => {
        e.preventDefault()
        const data = {
            name,
            price,
            image
        }

        axios.post('http://localhost:3000/api/products', data)
            .then(() => {
                enqueueSnackbar('Product added successfully', { variant: 'success' });
                navigate('/')
            })
            .catch((err) => {
                enqueueSnackbar('Error', { variant: 'error' });
                console.log(err)
            })
    }
    return (
        <section className="create flex justify-center items-center min-h-screen">
            <article className="flex flex-col justify-center items-center gap-5 p-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl">
                <h1 className="text-5xl text-black">Create New Product</h1>
                <article>
                    <form className="flex flex-col items-center gap-3">
                        <input
                            placeholder="Product Name"
                            type="text"
                            name='name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="input rounded-md bg-transparent text-xl p-2"
                            autoComplete="off"
                        />
                        <input
                            placeholder="Price"
                            type="number"
                            name='price'
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="input rounded-md bg-transparent text-xl p-2"
                            autoComplete="off"
                        />
                        <input
                            placeholder="Image URL"
                            name='image'
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            className="input rounded-md bg-transparent text-xl p-2"
                            autoComplete="off"
                        />
                        <button
                            onClick={handleAddProduct}
                            disabled={!name || !price || !image ? true : false}
                            className={!name || !price || !image ? 'disabled-add-btn' : 'add-btn'}
                        >Submit</button>
                    </form>
                </article>
            </article>
        </section>
    )
}

export default CreatePage