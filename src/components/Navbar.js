import { Link, useMatch, useResolvedPath } from "react-router-dom"
import logo from "../images/cyberlions.00de06b8144cd50f9034.png"

export default function Navbar() {
    const path = window.location.pathname
    return (
        <nav className="nav">
            <article className="nav-cyber-lions">
                <img src={logo} />
                <Link to="/" className="home">CYBERLIONS</Link>
            </article>
            <ul>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/newsletter">Newsletter</CustomLink>
                <CustomLink to="/our-robots">Our Robots</CustomLink>
                <CustomLink to="/support-us">Support Us</CustomLink>
                <CustomLink to="/contacts">Contacts</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({to, children}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to}>
                {children}
            </Link>
        </li>
    )
}