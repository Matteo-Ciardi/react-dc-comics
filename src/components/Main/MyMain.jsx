import MyHero from './Hero/MyHero'
import MyCard from './Card/MyCard'
import MyShop from "./shop/MyShop"
import './MyMain.css'

const MyMain = () => {
    return (
        <main>
            <MyHero />
            <div className='mainContainer'>
                <MyCard />
                <button className='loadButton'>LOAD MORE</button>
            </div>
            <MyShop />
        </main>
    )
}

export default MyMain