import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom"
import { useSnackbar } from 'notistack';

const DeleteProduct = () => {
    const { id } = useParams()
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate()

    const handleDeleteBook = () => {
        axios
            .delete(`http://localhost:3000/api/products/${id}`)
            .then(() => {
                enqueueSnackbar('Product Deleted successfully', { variant: 'success' });
                navigate('/')
            })
            .catch((err) => {
                enqueueSnackbar('Error', { variant: 'error' });
                console.log(err)
            })
    }

    const handleNoClick = () => {
        navigate('/')
    }

    return (
        <article className='delete-main flex flex-col justify-center items-center gap-5 min-h-screen'>
            <h2 className='w-fit p-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl text-4xl'>Are you sure you&apos;d like to delete this product? </h2>
            <section className='flex flex-row gap-10'>
                <button className='p-5 rounded-xl text-4xl bg-gradient-to-r from-cyan-400 to-blue-500' onClick={handleDeleteBook}>Yes</button>
                <button className='p-5 rounded-xl text-4xl bg-gradient-to-r from-cyan-400 to-blue-500' onClick={handleNoClick}>No</button>
            </section>
        </article>
    )
}

export default DeleteProduct