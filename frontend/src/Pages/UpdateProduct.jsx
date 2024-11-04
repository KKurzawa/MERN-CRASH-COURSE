import { useEffect, useState } from "react"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"
import { useSnackbar } from "notistack"

const UpdateProduct = () => {
    const [name, setName] = useState()
    const [price, setPrice] = useState({})
    const [image, setImage] = useState({})
    const { id } = useParams()
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:3000/api/products/${id}`)
            .then((res) => {
                setName(res.data.data.name)
                setPrice(res.data.data.price)
                setImage(res.data.data.image)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const handleEditProduct = () => {
        const data = {
            name,
            price,
            image
        }
        axios
            .put(`http://localhost:3000/api/products/${id}`, data)
            .then(() => {
                console.log(data)
                navigate('/')
                enqueueSnackbar('Product updated successfully', { variant: 'success' })
            })
            .catch((err) => {
                enqueueSnackbar('Error', { variant: 'error' });
                console.log(err)
            })
    }

    return (
        <article className="update-main flex justify-center items-center min-h-screen">
            <section className="flex flex-col justify-center items-center gap-5 p-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl">
                <h2 className="text-5xl text-black">Update Product</h2>
                <form className="flex flex-col items- gap-3">
                    <input
                        type="text"
                        value={name}
                        placeholder='Name'
                        onChange={(e) => setName(e.target.value)}
                        className="input rounded-md bg-transparent text-xl p-2"
                    />
                    <input
                        type="number"
                        value={price}
                        placeholder='Price'
                        onChange={(e) => setPrice(e.target.value)}
                        className="input rounded-md bg-transparent text-xl p-2"
                    />
                    <input
                        type="text"
                        value={image}
                        placeholder="Image URL"
                        onChange={(e) => setImage(e.target.value)}
                        className="input rounded-md bg-transparent text-xl p-2"
                    />
                </form>
                <button
                    onClick={handleEditProduct}
                    disabled={!name && !price && !image ? true : false}
                    className={!name && !price && !image ? 'disabled-add-btn' : 'add-btn'}
                >Update</button>
            </section>
        </article>
    )
}

export default UpdateProduct