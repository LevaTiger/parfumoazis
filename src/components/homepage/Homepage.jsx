import './homepage.css'

const Homepage=()=>{

    return(
        <div className="container">
            <div className="home-layout">
                <h2 className='primary-gradient'>KELETI PARFÜMÖK MAGYAR KERESKEDŐJE</h2>
                <figure>
                    <img src="https://www.parfumoazis.hu/wp-content/uploads/2024/10/image1-e1729533035134.jpeg" alt="hero-img" />
                </figure>

                <h2 className="primary-gradient">NÉZD MEG TERMÉKEINKET</h2>

                <div className="parfume-types">
                    <div>
                        <img src="https://www.parfumoazis.hu/wp-content/uploads/2024/11/ferfi1.jpg" alt="" />
                        <button>Féri Parfümök</button>
                    </div>
                    <div>
                        <img src="https://www.parfumoazis.hu/wp-content/uploads/2024/11/noi1.jpg" alt="" />
                        <button>Női Parfümök</button>
                    </div>
                    <div>
                        <img src="https://www.parfumoazis.hu/wp-content/uploads/2024/11/892750C9-EED7-499F-94BB-E4B101F05FF41.png" alt="" />
                        <button>Unisex Parfümök</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;