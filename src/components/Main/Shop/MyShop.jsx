import './MyShop.css'

const MyShop = () => {
    return (
        <div className='shopBgColor'>

            <div className='shopContainer'>

                <figure className='itemPosition'>
                    <img className='itemImage' src='../../src/assets/img/buy-comics-digital-comics.png'></img>
                    <figcaption className='itemName'><a href='#'>DIGITAL COMICS</a></figcaption>
                </figure>

                <figure className='itemPosition'>
                    <img className='itemImage' src='../../src/assets/img/buy-comics-merchandise.png'></img>
                    <figcaption className='itemName'><a href='#'>DC MERCHANDISE</a></figcaption>
                </figure>

                <figure className='itemPosition'>
                    <img className='itemImage' src='../../src/assets/img/buy-comics-subscriptions.png'></img>
                    <figcaption className='itemName'><a href='#'>SUBSCRIPTION</a></figcaption>
                </figure>

                <figure className='itemPosition'>
                    <img className='itemImage' src='../../src/assets/img/buy-comics-shop-locator.png'></img>
                    <figcaption className='itemName'><a href='#'>COMIC SHOP LOCATOR</a></figcaption>
                </figure>

                <figure className='itemPosition'>
                    <img className='itemImage' src='../../src/assets/img/buy-dc-power-visa.svg'></img>
                    <figcaption className='itemName'><a href='#'>DC POWER VISA</a></figcaption>
                </figure>

            </div>

        </div>
    )
}

export default MyShop