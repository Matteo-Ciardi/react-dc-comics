import './MyFooter.css'

const MyFooter = () => {
    return (
        <footer>
            <section className="footerBg">
                <div className='footerContainer'>
                    <nav>
                        <ul>
                            <li><h3>DC COMICS</h3></li>
                            <li><a href="#">Characters</a></li>
                            <li><a href="#">Comics</a></li>
                            <li><a href="#">Movies</a></li>
                            <li><a href="#">TV</a></li>
                            <li><a href="#">Games</a></li>
                            <li><a href="#">Collectibles</a></li>
                            <li><a href="#">Videos</a></li>
                            <li><a href="#">Fans</a></li>
                            <li><a href="#">News</a></li>
                        </ul>
                        <ul>
                            <li><h3>SHOP</h3></li>
                            <li><a href="#">Shop DC</a></li>
                            <li><a href="#">Shop DC Collectibles</a></li>
                        </ul>
                    </nav>
                    <nav>
                        <ul>
                            <li><h3>DC</h3></li>
                            <li><a href="#">Terms OF Use</a></li>
                            <li><a href="#">Privacy Policy(New)</a></li>
                            <li><a href="#">Ad Choices</a></li>
                            <li><a href="#">Advertising</a></li>
                            <li><a href="#">Jobs</a></li>
                            <li><a href="#">Subscriptions</a></li>
                            <li><a href="#">TalentWorkshops</a></li>
                            <li><a href="#">CPSC Certificates</a></li>
                            <li><a href="#">Ratings</a></li>
                            <li><a href="#">Shop Help</a></li>
                            <li><a href="#">Conact Us</a></li>
                        </ul>
                    </nav>
                    <nav>
                        <ul>
                            <li><h3>SITES</h3></li>
                            <li><a href="#">DC</a></li>
                            <li><a href="#">MAD Magazine</a></li>
                            <li><a href="#">DC Kids</a></li>
                            <li><a href="#">DC Universe</a></li>
                            <li><a href="#">DC Power Visa</a></li>
                        </ul>
                    </nav>
                </div>

            </section>
            <section className='footer-bottom'>

                <div className='footerBottomContainer'>
                    <div>
                        <button className='signUpButton'>SIGN-UP NOW!</button>
                    </div>
                    <nav className='socialNav'>
                        <span className='followUs'>FOLLOW US</span>
                        <ul className='socialList'>
                            <li>
                                <a href='#'><img src='../../src/assets/img/footer-facebook.png'></img></a>
                            </li>
                            <li>
                                <a href='#'><img src='../../src/assets/img/footer-twitter.png'></img></a>
                            </li>
                            <li>
                                <a href='#'><img src='../../src/assets/img/footer-youtube.png'></img></a>
                            </li>
                            <li>
                                <a href='#'><img src='../../src/assets/img/footer-pinterest.png'></img></a>
                            </li>
                            <li>
                                <a href='#'><img src='../../src/assets/img/footer-periscope.png'></img></a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
        </footer>
    )
}

export default MyFooter