import { Link } from "react-router-dom"
import { CiSquarePlus } from "react-icons/ci";

const Navbar = () => {
    return (
        <section className="navbar w-full px-4 bg-gradient-to-r from-cyan-400 to-blue-500">
            <nav className="flex items-center justify-between h-16">
                <h2 className="text-5xl font-bold text-center">
                    <Link to={'/'}>PRODUCT STORE</Link>
                </h2>
                <section className="flex gap-2 items-center">
                    <Link to={'/create'}>
                        <button>
                            <CiSquarePlus className="text-5xl" />
                        </button>
                    </Link>
                </section>
            </nav>
        </section>
    )
}

export default Navbar