import comics from './comics.js'
import './MyCard.css'

const MyCard = () => {
    return (
        <>
            {comics.map((item) => (
                <div key={item.id} className='card'>
                    <a href='#'><img className='cardThumb' src={item.thumb} alt={item.title} /></a>
                    <span className='title'><a href='#'>{item.series.toUpperCase()}</a></span>
                </div>
            ))}
        </>
    )
}

export default MyCard