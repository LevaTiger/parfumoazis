import './homepage.css'

const Homepage=()=>{

    return(
        <div className="container">
            <div className="home-layout">
                <h2 className='primary-gradient'>KELETI PARFÜMÖK MAGYAR KERESKEDŐJE</h2>
                <figure>
                    <img width={'100%'} src="https://www.parfumoazis.hu/wp-content/uploads/2024/10/image1-e1729533035134.jpeg" alt="hero-img" />
                </figure>

                <h2 className="primary-gradient">NÉZD MEG TERMÉKEINKET</h2>

            {/* itt ezdődnek a aprfüm típusok */}

                <div className="parfume-types">
                    <div>
                        <img src="https://www.parfumoazis.hu/wp-content/uploads/2024/11/ferfi1.jpg" alt="" />
                        <button><h4>FÉRFI PARFÜMÖK</h4></button>
                    </div>
                    <div>
                        <img src="https://www.parfumoazis.hu/wp-content/uploads/2024/11/noi1.jpg" alt="" />
                        <button><h4>NŐI PARFÜMÖK</h4></button>
                    </div>
                    <div>
                        <img src="https://www.parfumoazis.hu/wp-content/uploads/2024/11/892750C9-EED7-499F-94BB-E4B101F05FF41.png" alt="" />
                        <button><h4>UNISEX PARFÜMÖK</h4></button>
                    </div>
                </div>
                <h2 className="primary-gradient">AKCIÓS SZETTEK</h2>
                <div className="parfume-onsale">
                    <div>
                        <img src="https://www.parfumoazis.hu/wp-content/uploads/2024/12/465590416_8622459897834263_6799252361705703811_n.jpg" alt="" />
                        <button><h4>AKCIÓ</h4></button>
                    </div>
                    <div>
                        <img src="https://www.parfumoazis.hu/wp-content/uploads/2024/12/468015356_8737243663022552_8976675526318391050_n.jpg" alt="" />
                        <button><h4>AKCIÓ</h4></button>
                    </div>
                    <div>
                        <img src="https://www.parfumoazis.hu/wp-content/uploads/2024/11/467993363_8737188939694691_103231939661690499_n.jpg" alt="" />
                        <button><h4>AKCIÓ</h4></button>
                    </div>
                    <div>
                        <img src="https://www.parfumoazis.hu/wp-content/uploads/2024/11/465468006_8622482394498680_4246483722406989476_n.jpg" alt="" />
                        <button><h4>AKCIÓ</h4></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;