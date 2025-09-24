import './MyShop.css'

const MyShop = () => {
    return (
        <div className='shopBgColor'>

            <div className='shopContainer'>

                <figure className='itemPosition'>
                    <a href='#'><img className='itemImage' src='../../src/assets/img/buy-comics-digital-comics.png'></img>
                    </a>
                    <figcaption className='itemName'><a href='#'>DIGITAL COMICS</a></figcaption>
                </figure>

                <figure className='itemPosition'>
                    <a href='#'><img className='itemImage' src='../../src/assets/img/buy-comics-merchandise.png'></img>
                    </a>
                    <figcaption className='itemName'><a href='#'>DC MERCHANDISE</a></figcaption>
                </figure>

                <figure className='itemPosition'>
                    <a href='#'><img className='itemImage' src='../../src/assets/img/buy-comics-subscriptions.png'></img>
                    </a>
                    <figcaption className='itemName'><a href='#'>SUBSCRIPTION</a></figcaption>
                </figure>

                <figure className='itemPosition'>
                    <a href='#'><img className='itemImage' src='../../src/assets/img/buy-comics-shop-locator.png'></img>
                    </a>
                    <figcaption className='itemName'><a href='#'>COMIC SHOP LOCATOR</a></figcaption>
                </figure>

                <figure className='itemPosition'>
                    <a href='#'><img className='itemImage' src='../../src/assets/img/buy-dc-power-visa.svg'></img>
                    </a>
                    <figcaption className='itemName'><a href='#'>DC POWER VISA</a></figcaption>
                </figure>

            </div>

        </div>
    )
}

export default MyShop