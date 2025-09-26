import comics from './Card/comics'
import MyCard from './Card/MyCard'
import './CardList.css'

const CardList = () => {
    return (
        <>
            <div className='cardContainer'>
                {
                    comics.map(card => (
                        <MyCard
                            key={card.id}
                            cardProp={card}
                        />
                    ))
                }
                <button className='loadButton'>LOAD MORE</button>
            </div>
        </>
    )
}

export default CardList