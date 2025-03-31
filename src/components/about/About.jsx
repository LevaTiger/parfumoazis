import { Link } from "react-router";
import './about.css'

const About =()=>{

    return(
       <main className="container">
        <hr />
        <h1>Rólunk</h1>
            <article>
                <div className="article-section">
                    <figure>
                        <img src="https://www.parfumoazis.hu/wp-content/uploads/2024/11/Leonardo_Phoenix_Certainly_Heres_the_script_formatted_for_use_01.jpg" alt="Dubai Parfume img" />
                    </figure>
                    <div>
                        <p>Üdvözöljük exkluzív arab parfümök világában!</p>
                        <p>
                            Webshopunk célja, hogy Önnek elhozzuk a Közel-Kelet illatainak gazdag kultúráját, ahol a parfümök készítése igazi művészet. Kínálatunkban megtalálhatók a legfinomabb, autentikus arab parfümök, melyek ötvözik a hagyományos keleti összetevőket és a modern parfümkészítés kifinomultságát.
                        </p>
                        <p>
                             Az arab parfümök különlegesek, mert természetes alapanyagokból, például agarfa, rózsa, pézsma és fűszerek felhasználásával készülnek, így minden illat valódi luxusélményt nyújt. Legyen szó elegáns, érzéki vagy fűszeres illatokról, nálunk biztosan megtalálja a stílusához és személyiségéhez leginkább illőt – legyen az férfi, női vagy unisex parfüm.
                        </p>
                        <p>
                            Webshopunkban a minőség és az elegancia találkozik, hogy Ön egy igazán egyedi és emlékezetes illatélményt élvezhessen minden nap. Fedezze fel termékeinket, és hagyja, hogy az arab parfümök varázslatos világa Önt is magával ragadja!
                        </p>
                        <p>
                            Ez a bemutatkozó szöveg kiemeli a webshop különlegességét és a termékek minőségét, miközben közel hozza az arab parfümök varázsát a vásárlókhoz.
                        </p>
                    </div>
                </div>
                    <button><Link to={'/'}>Főoldal</Link></button>

            </article>
       </main>
    )
}

export default About;