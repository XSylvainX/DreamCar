import React from "react"
import visual from "../../assets/images/about.jpg"
import '../../style/about.css'


function Contact() {
    return (
        <div className="about container">
            <h1 className="contact-title">A propos de nous</h1>
            <hr className="text-light" />
            <div>
                <p className="text-start">
                    Dream CAR est une société existante depuis 2010. Nous sommes avant tout des passionnés d'automobile qui cherchons à proposer à nos clients la voiture faite pour eux, la voiture de leurs rêves.


                    Notre showroom vous propose des véhicules anciens contrôlés par nos soins mais également des véhicules neuf, n'hésitez pas à nous contacter pour plus d'informations.


                    Nous proposons également un ensemble de services destinés à vous simplifier les démarches administratives lors de votre achat.
                </p>
            </div>
            <div className="text-center">
                <img className="img-fluid pt-5" src={visual} alt="about" />
            </div>
        </div>
    )
}

export default Contact