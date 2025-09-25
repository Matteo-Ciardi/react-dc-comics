import navItem from "./navbar.js";
import './MyNavBar.css'

const MyNavBar = () => {
    return (
        <nav>
            <ul>
                {navItem.map((item, index) => (
                    <li key={index}>
                        <a href={item.href}>{item.label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default MyNavBar