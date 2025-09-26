import MyHero from './Hero/MyHero'
import CardList from './ProductList/CardList'
import MyShop from "./shop/MyShop"
import './MyMain.css'

const MyMain = () => {
    return (
        <main>
            <MyHero />
            <div className='mainContainer'>
                <div className='label'>CURRENT SERIES</div>
                <CardList />
            </div>
            <MyShop />
        </main>
    )
}

export default MyMain