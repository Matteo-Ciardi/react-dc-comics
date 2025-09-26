import './MyHeader.css'
import MyNavBar from './Navbar/MyNavBar'

const MyHeader = () => {
    return (
        <header>
            <div className="headerContainer">
                <figure>
                    <a href='#'><img className='logoImage' src="../../src/assets/img/dc-logo.png" alt="Logo" /></a>
                </figure>
                <MyNavBar />
            </div>
        </header>
    )
}

export default MyHeader