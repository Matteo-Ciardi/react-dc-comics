import './MyHeader.css'
import MyNavBar from './Navbar/MyNavBar'

const MyHeader = () => {
    return (
        <header>
            <div className="headerContainer">
                <figure>
                    <img className='logoImage' src="../../src/assets/img/dc-logo.png" alt="Logo" />
                </figure>
                <MyNavBar />
            </div>
        </header>
    )
}

export default MyHeader