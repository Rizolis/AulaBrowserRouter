import { Link } from "react-router-dom"

export default function Header(){
    return(
        <>
        <nav>
            <ul>
                <Link to="/Home">
                    <li>Home</li>
                </Link>
                <li><Link to="/produtos">
                Produtos</Link></li> 
                <Link to="/Ofertas">
                    <li>Ofertas</li>
                </Link>
            </ul>
        </nav>
        </>
    )
}