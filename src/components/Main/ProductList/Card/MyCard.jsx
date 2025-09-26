import './MyCard.css'

const MyCard = (props) => {

    const { title, thumb, series, } = props.cardProp

    return (
        <>
            <div className='card'>
                <a href='#'><img className='cardThumb' src={thumb} alt={title} /></a>
                <span className='title'><a href='#'>{series.toUpperCase()}</a></span>
            </div>
        </>
    )
}

export default MyCard