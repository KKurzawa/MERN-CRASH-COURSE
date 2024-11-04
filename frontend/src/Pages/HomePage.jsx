import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import axios from "axios"
import { FaEdit } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";


const HomePage = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios
            .get('http://localhost:3000/api/products')
            .then((response) => {
                setProducts(response.data.data)
                console.log(products)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <main className="main py-10 min-h-screen">
            {products.length === 0 ? <h1>No products available.</h1> :
                <section className="product-cont grid grid-cols-3 justify-items-center items-center gap-10">
                    {products.map((item) => (
                        <ol key={item._id} className="w-[400px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl text-2xl hover:translate-y-2" >
                            <section className="flex flex-col h-auto gap-1">
                                <img src={item.image} alt={item.name} className="w-full h-[200px] rounded-t-xl" />
                                <li className="pl-2">{item.name}</li>
                                <li className="pl-2">${item.price}</li>
                                <section className="flex flex-row gap-3 pl-2 pb-3">
                                    <Link to={`/update/${item._id}`}><FaEdit /></Link>
                                    <Link to={`/delete/${item._id}`}><FaTrashCan /></Link>
                                </section>
                            </section>

                        </ol>
                    ))}
                </section>}
        </main>
    )
}

export default HomePage