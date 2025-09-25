import comics from './comics.js'
import './MyCard.css'

const MyCard = () => {
    return (
        <>
            {comics.map((item) => (
                <div key={item.id} className='card'>
                    <img className='cardThumb' src={item.thumb} alt={item.title} />
                    <span className='title'>{item.series.toUpperCase()}</span>
                </div>
            ))}
        </>
    )
}

export default MyCard