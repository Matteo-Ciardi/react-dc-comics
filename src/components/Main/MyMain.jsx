import MyCard from './Card/MyCard'
import './MyMain.css'
import MyShop from "./shop/MyShop"

const MyMain = () => {
    return (
        <main>
            <div className='mainContainer'>
                <MyCard />
            </div>
            <MyShop />
        </main>
    )
}

export default MyMain