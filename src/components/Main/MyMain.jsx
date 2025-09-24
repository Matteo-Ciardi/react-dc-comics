import './MyMain.css'
import MyShop from "./shop/MyShop"

const MyMain = () => {
    return (
        <main>
            <div className='mainContainer'>
                <h1 className='mainTitle'> -- Content goes here -- </h1>
            </div>
            <MyShop />
        </main>
    )
}

export default MyMain